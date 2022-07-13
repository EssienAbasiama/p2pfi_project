import React from "react";
import "./../styles/header.css";
import { DAppProvider, Mainnet } from "@usedapp/core";
import { getDefaultProvider } from "ethers";


function Header(activateBrowserWallet,deactivate,account) {
  const config = {
    networks: [Mainnet],
    readonlyChainId: Mainnet.chainId,
    readOnlyUrls: {
      [Mainnet.chainId]: getDefaultProvider('mainnet'),
    },
    notifications: {
      expirationPeriod: 1000,
      checkInterval: 1500,
    },
  };
  return (
    <DAppProvider config={config}>
      <div className="header">
        <div className="text__logo">
          ShushiSwap <span className="explorer"> Ex </span>{" "}
        </div>
        <button className="connectWallet" onClick={() => activateBrowserWallet()}>
          {account ? <span>Connect Wallet </span> : <span>Connected</span>}
        </button>
      </div>
    </DAppProvider>
  );
}

export default Header;
