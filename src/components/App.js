import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";

import Navbar from "./Layouts/Navbar";
import Dashboard from "./Components/Dashboard";
import About from "./Components/About";
import Feature from "./Components/Feature";
import Viproom from "./Components/Viproom";
import Roadmap from "./Components/Roadmap";
import Team from "./Components/Team";
import FuturePlan from "./Components/FuturePlan";
import Breakdown from "./Components/Breakdown";
import Faq from "./Components/Faq";
import JoinDiscord from "./Components/JoinDiscord";
import ConnectWallet from "./Components/ConnectWallet";
import DropCount from "./Components/DropCount";
import MetamaskProvider from "./Components/MetamaskProvider";

function getLibrary(provider) {
  return new Web3(provider);
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <MetamaskProvider>
        <div className="body">
          <Navbar />
          <Dashboard />
          <ConnectWallet />
          <About />
          <DropCount />
          <Feature />
          <Viproom />
          <Roadmap />
          <FuturePlan />
          <Breakdown />
          <Team />
          <Faq />
          <JoinDiscord />
        </div>
      </MetamaskProvider>
    </Web3ReactProvider>
  );
}

export default App;
