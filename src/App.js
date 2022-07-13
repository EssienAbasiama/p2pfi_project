import "./App.css";
// import TransactionList from "./component/Transaction_list";
import Test from "./component/Test";
import { DAppProvider, Mainnet } from "@usedapp/core";

import { getDefaultProvider } from "ethers";

function App() {
   const config = {
     networks: [Mainnet],
     readonlyChainId: Mainnet.chainId,
     readOnlyUrls: {
       [Mainnet.chainId]: getDefaultProvider("mainnet"),
     },
     notifications: {
       expirationPeriod: 1000,
       checkInterval: 1000,
     },
   };

  return (
    <DAppProvider config={config}>
      <div className="App">
        {/* <TransactionList /> */}
        <Test/>
      </div>
    </DAppProvider>
  );
}

export default App;
