import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Image, Row, Col, Container, Button } from "react-bootstrap";
import { useWeb3React } from "@web3-react/core";
import PrivatesaleClock from "src/components/PrivatesaleClock";
import { FaPlus, FaMinus } from "react-icons/fa";
import { proofMerkle } from "src/utils/proofMerkle";
import { MAX_ELEMENTS } from "src/config";
import { BigNumber, ethers, getDefaultProvider } from "ethers";
import C3SNFTABI from "src/config/C3SNFT.json";
import { parseEther } from "ethers/lib/utils";

export default function Minting() {
  const { chainId, active, activate, account } = useWeb3React();
  const [totalSupply, setTotalSupply] = useState(0);
  const [stageVal, setStageVal] = useState(0);
  const [isMintingPaused, setIsMintingPaused] = useState(true);
  const [purchaseLimit, setPurchaseLimit] = useState(0);
  const [stagePrice, setStagePrice] = useState(0);
  const [currentStage, setCurrentStage] = useState(0);
  const [cntMint, setCntMint] = useState(1);
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const C3SContract = new ethers.Contract(
    process.env.REACT_APP_NFT_ADDRESS,
    C3SNFTABI,
    provider.getSigner()
  );

  const increase = () => {
    let cnt = cntMint + 1;
    if (cnt > purchaseLimit) cnt = purchaseLimit;
    setCntMint(cnt);
  };

  const decrease = () => {
    let cnt = cntMint - 1;
    if (cnt <= 1) cnt = 1;
    setCntMint(cnt);
  };

  useEffect(async () => {
    if (active) {
      await initialHandle();
    }
  });

  async function initialHandle() {
    console.log("account", account);
    const _stage = parseInt(await C3SContract.CURRENT_STAGE());
    const _total = parseInt(await C3SContract.totalSupply());
    const _isPaused = await C3SContract.MINTING_PAUSED();
    const _purLimit = parseInt(await C3SContract.PURCHASE_LIMIT(_stage));
    const _price = parseFloat(await C3SContract.STAGE_PRICE(_stage)) / 10 ** 18;
    if (_stage) setStageVal(_stage);
    if (_purLimit) setPurchaseLimit(_purLimit);
    if (_total) setTotalSupply(_total);
    if (_price) setStagePrice(_price);
    if (_isPaused !== undefined) setIsMintingPaused(_isPaused);
    if (!_isPaused) {
      if (_stage >= 0) setCurrentStage(1);
    }
    if (_total === MAX_ELEMENTS) {
      setCurrentStage(2);
    }
  }

  const getReadableErrorMsg = (error) => {
    console.log("================");
    console.log(error);
    let readableErrorMsg = "Transaction Error";

    if (error.message.indexOf("Address does not exist in list") > 0) {
      readableErrorMsg = "You are not in the respective whitelist";
    } else if (error.message.indexOf("All tokens have been minted") > 0) {
      readableErrorMsg = "All tokens have been minted";
    } else if (error.message.indexOf("Purchase would exceed max supply") > 0) {
      readableErrorMsg = "Please choose less amount. Not enough tokens left";
    } else if (error.message.indexOf("Minting is not active") > 0) {
      readableErrorMsg = "Minting is not active. It will be resumed soon";
    } else if (error.message.indexOf("All tokens have been minted") > 0) {
      readableErrorMsg = "All tokens have been sold out";
    } else if (error.message.indexOf("Purchase exceeds max allowed") > 0) {
      if (stageVal === 0 || stageVal === 1)
        readableErrorMsg = "You are not allowed to mint more than 2 NFTs";
      else readableErrorMsg = "You are not allowed to mint more than 4 NFTs";
    } else if (error.message.indexOf("ETH amount is not sufficient") > 0) {
      readableErrorMsg = "You have insufficient funds";
    } else if (
      error.message.indexOf("insufficient funds for gas * price + value") > 0
    ) {
      readableErrorMsg = "Insufficient funds for minting";
    }

    return readableErrorMsg;
  };

  async function handleMint() {
    const proof = proofMerkle(account);
    console.log(proof);
    const _price = stagePrice * cntMint;

    const price = parseEther(_price.toString());

    try {
      if (stageVal === 0) {
        await C3SContract.privateSale(proof, cntMint, { value: price })
          .then((tx) => {
            return tx.wait().then(
              (receipt) => {
                // This is entered if the transaction receipt indicates success
                console.log("receipt", receipt);
                toast.success("PrivateSale Success!");
                return true;
              },
              (error) => {
                console.log("error", error);
                toast.error("PrivateSale Fail!");
              }
            );
          })
          .catch((error) => {
            console.log("error", error);
            if (error.message.indexOf("signature") > 0) {
              toast.error("You canceled transaction!");
            } else {
              toast.error(getReadableErrorMsg(error));
            }
          });
      } else if (stageVal === 1) {
        await C3SContract.publicSale(cntMint, { value: price })
          .then((tx) => {
            return tx.wait().then(
              (receipt) => {
                // This is entered if the transaction receipt indicates success
                console.log("receipt", receipt);
                toast.success("PublicSale Success!");
                return true;
              },
              (error) => {
                console.log("error", error);
                toast.error("PublicSale Fail!");
              }
            );
          })
          .catch((error) => {
            console.log(error.message);
            if (error.message.indexOf("signature") > 0) {
              toast.error("You canceled transaction!");
            } else {
              toast.error(getReadableErrorMsg(error));
            }
          });
      }
    } catch (error) {
      console.log("error", error);
    }
  }

  const MintButton = () => {
    if (active) {
      switch (currentStage) {
        case 0:
          return (
            <Col md={12} className="text-center mt-5">
              <h2>{process.env.REACT_APP_MINT_DAY}</h2>
            </Col>
          );
          break;
        case 1:
          return (
            <>
              <Col md={12} className="text-center mt-5">
                {stageVal === 0 ? <h2>PRIVATE SALE</h2> : <h2>PUBLIC SALE</h2>}
              </Col>

              <Col md={12} className="text-center mt-5">
                <h2>
                  {stageVal === 0
                    ? process.env.REACT_APP_PUBLIC_MINT_DAY
                    : process.env.REACT_APP_REVEAL_DAY}
                </h2>
              </Col>

              <Col md={12} className="text-center mt-5">
                <PrivatesaleClock
                  class_name="mint-section"
                  end_time={
                    stageVal === 0
                      ? process.env.REACT_APP_PUBLIC_MINT_TIME
                      : process.env.REACT_APP_REVEAL_TIME
                  }
                />
              </Col>
              <Col md={12} className="text-center mt-5">
                <div className="connectcounter">
                  <div className="buttonLeft">
                    <button
                      className="down_count btn btn-info"
                      title="Down"
                      onClick={() => {
                        decrease();
                      }}
                    >
                      <FaMinus />
                    </button>

                    <input
                      className="counter"
                      type="text"
                      value={cntMint}
                      disabled
                    />

                    <button
                      className="up_count btn btn-info"
                      title="Up"
                      onClick={() => {
                        increase();
                      }}
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <span
                    className="presale-mint"
                    onClick={() => {
                      handleMint();
                    }}
                  >
                    MINT
                  </span>
                </div>
                <p className="counterBelowTxt">
                  MAX {purchaseLimit} C3SNFTs PER WALLET
                </p>
              </Col>
            </>
          );
          break;
        case 2:
          return (
            <Col md={12} className="text-center mt-5">
              <h2>Buy on OpenSea</h2>
            </Col>
          );
          break;
      }
    } else {
      return (
        <Col md={12} className="text-center mt-5">
          <h2>PLEASE CONNECT WALLET TO MINT TOKEN</h2>
        </Col>
      );
    }
  };

  return (
    <div id="ConnectWallet">
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            style: {
              background: "white",
              paddingLeft: 40,
              paddingRight: 40,
              fontWeight: 500,
            },
          },
          error: {
            style: {
              background: "white",
              color: "black",
              paddingLeft: 40,
              paddingRight: 40,
              fontWeight: 500,
            },
          },
        }}
      />
      <Container>
        <Row>{MintButton()}</Row>
      </Container>
    </div>
  );
}
