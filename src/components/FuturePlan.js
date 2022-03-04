import React from "react";
import { Container, Image } from "react-bootstrap";

export default function FuturePlan() {
  return (
    <div id="futureplan">
      <Container>
        <div className="futurePlantxt">
          <h2
            className="mt-5 text-orange font-xxl"
            style={{ textAlign: "center", fontWeight: "bold" }}
          >
            FEATURES AND UTILITY
          </h2>
          <p
            className="mt-3 mb-5 text-white txtSize"
            style={{ textAlign: "center" }}
          >
            C3S NFT
          </p>
          <ul className="mb-5 pb-5">
            <li>
              {" "}
              <img src="images/checkmark.png" width="20px" />
              <b>Holder</b> role in our Discord chat
            </li>
            <li>
              {" "}
              <img src="images/checkmark.png" width="20px" />
              <b>Being</b> eligible for Airdrops (NFT or Coins)
            </li>
            <li>
              {" "}
              <img src="images/checkmark.png" width="20px" />
              <b>Access</b> to our decentralized application
            </li>
            <li>
              {" "}
              <img src="images/checkmark.png" width="20px" />
              <b>earning</b> C3S Tokens for staking the NFT
            </li>
            <li>
              {" "}
              <img src="images/checkmark.png" width="20px" />
              <b>Eligibility</b> for Community Portfolio Rewards
            </li>
            <li>
              {" "}
              <img src="images/checkmark.png" width="20px" />
              <b>Staking</b> the C3S Token
            </li>
            <li>
              {" "}
              <img src="images/checkmark.png" width="20px" />
              <b>breeding</b> of our future Layer 2 collection
            </li>
            <li>
              {" "}
              <img src="images/checkmark.png" width="20px" />
              <b>Metaverse</b> version of your Layer 1 NFT
            </li>
            <li>
              {" "}
              <img src="images/checkmark.png" width="20px" />
              <b>Access</b> to our Metaverse Headquarter
            </li>
            <li>
              {" "}
              <img src="images/checkmark.png" width="20px" />
              <b>and</b> all future benefits
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
