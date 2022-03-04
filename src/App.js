import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "src/App.css";

import NavbarHeader from "src/components/NavbarHeader";
import Minting from "src/components/Minting";
import Dashboard from "src/components/Dashboard";
import About from "src/components/About";
import DropCount from "src/components/DropCount";
import Feature from "src/components/Feature";
import Roadmap from "src/components/Roadmap";
import Breakdown from "src/components/Breakdown";
import Team from "src/components/Team";
import Faq from "src/components/Faq";
import JoinDiscord from "src/components/JoinDiscord";

function getLibrary(provider) {
  return new Web3(provider);
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="App">
        <NavbarHeader />
        <Dashboard />
        <Minting />
        <About />
        <DropCount />
        <Feature />
        <Roadmap />
        <Breakdown />
        <Team />
        <Faq />
        <JoinDiscord />
      </div>
    </Web3ReactProvider>
  );
}

export default App;
