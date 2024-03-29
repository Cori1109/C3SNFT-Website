import React from "react";
import ReactDOM from "react-dom";
import { Mainnet, DAppProvider } from "@usedapp/core";
import "src/index.css";
import App from "src/App";
import reportWebVitals from "src/reportWebVitals";
import { Constants } from "src/config/constants";

const config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: Constants.rpcURL[Mainnet.chainId],
  },
  multicallVersion: 2,
};

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
