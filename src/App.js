import "./App.css";
import TransactionList from "./component/Transaction_list";
import { DAppProvider, Mainnet } from "@usedapp/core";
import Test from "./component/Test";
import { getDefaultProvider } from "ethers";
// import { useState, useEffect } from "react";

function App() {
  const config = {
    networks: [Mainnet],
    readonlyChainId: Mainnet.chainId,
    readOnlyUrls: {
      [Mainnet.chainId]:
        "https://mainnet.infura.io/v3/e8b9bb2a1a8f495c80c2b93da2ce7806",
    },
    notifications: {
      expirationPeriod: 1000,
      checkInterval: 1000,
    },
  };

  return (
    <DAppProvider config={config}>
      <div className="App">
        <TransactionList />
        {/* <Test/> */}
      </div>
    </DAppProvider>
  );
}

export default App;
