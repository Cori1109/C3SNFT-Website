import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Navbar, Nav, Container, Button, Image } from "react-bootstrap";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";
import { useWeb3React } from "@web3-react/core";
import { injected } from "src/utils/connector";
import logo from "src/logo.svg";

export default function NavbarHeader() {
  const { chainId, active, activate, deactivate, account } = useWeb3React();
  const [addCss, setAddCss] = useState("");
  const [isWrongNetwork, setIsWrongNetwork] = useState();

  useEffect(() => {
    if (active) {
      if (chainId !== parseInt(process.env.REACT_APP_CHAIN_ID)) {
        toast.error(
          "You are on wrong network. Please switch to Ethereum Mainnet to continue"
        );
        setIsWrongNetwork(true);
      } else {
        setIsWrongNetwork(false);
      }
    }
  }, [chainId]);

  useEffect(() => {
    if (window.innerWidth < 985) {
      setAddCss("header-navbar-nav ");
    }
  }, []);

  async function connect(injected) {
    activate(injected);
  }

  async function disConnect(injected) {
    deactivate(injected);
  }

  const renderButton = (
    <>
      {active ? (
        <div className="connectedWallet">
          <div className="walletAddress">{account}</div>
          <button
            className="disConnectWallet"
            onClick={() => disConnect(injected)}
          >
            Disconnect
          </button>
        </div>
      ) : (
        <div className="justify-center">
          <button className="connectWallet" onClick={() => connect(injected)}>
            Connect
          </button>
        </div>
      )}
    </>
  );

  return (
    <Navbar expand="lg" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#" className="mr-4">
          <img src={logo} alt="logo" width="70px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-bar">
            <Nav.Link href="#about" className="header-btn">
              About
            </Nav.Link>
            <Nav.Link href="#feature" className="header-btn">
              Features
            </Nav.Link>
            <Nav.Link href="#roadmap" className="header-btn">
              Roadmap
            </Nav.Link>
            <Nav.Link href="#team" className="header-btn">
              Team
            </Nav.Link>
            <Nav.Link href="#faq" className="header-btn">
              FAQ
            </Nav.Link>
            <Nav.Link href="#" className="header-btn">
              <div className="walletArea mobileShow">{renderButton}</div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Nav className={addCss}>
            <Nav.Link href="https://opensea.io/" target="_blank">
              <span className="nb-icon">
                <Image src={"opensea-icon.svg"} />
              </span>
            </Nav.Link>
            <Nav.Link href="https://instagram.com/bargangnft" target="_blank">
              <span className="nb-icon">
                <FaInstagram />
              </span>
            </Nav.Link>
            <Nav.Link href="https://twitter.com/bargangnft" target="_blank">
              <span className="nb-icon">
                <FaTwitter />
              </span>
            </Nav.Link>
            <Nav.Link href="https://discord.gg/XqeDHe8f" target="_blank">
              <span className="nb-icon">
                <FaDiscord />
              </span>
            </Nav.Link>
          </Nav>
          <div className="walletArea mobileHidden">{renderButton}</div>
        </Navbar.Collapse>
      </Container>
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
    </Navbar>
  );
}
