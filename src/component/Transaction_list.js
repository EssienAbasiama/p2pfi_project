import React from "react";
import Header from "./Header";
import "./../styles/transaction.css";
import { useEthers } from "@usedapp/core";
import Body from "./TransactionListBody";

const Transaction_list = ()  => {
    const { activateBrowserWallet, account, deactivate } = useEthers();
  return (
    <div>
      <Header activateBrowserWallet={activateBrowserWallet} deactivate = {deactivate} account = {account}
      />
      <Body account={account} />
      
    </div>
  );
}

export default Transaction_list;
