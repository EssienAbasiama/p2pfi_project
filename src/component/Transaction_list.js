import React from "react";
import "./../styles/transaction.css";
import { useEthers, useEtherBalance, Mainnet } from "@usedapp/core";
import "./../styles/header.css";
import { formatEther } from "@ethersproject/units";
import Default from "./Default";
import { useToken } from "../hooks/useToken";
import { useTransactions } from "../hooks/useTransactions";
import SimpleDateTime from "react-simple-timestamp-to-date";

const Transaction_list = () => {
  const { activateBrowserWallet, account, deactivate } = useEthers();
  const etherscan = "https://etherscan.io/address/";
  const mainnetBalance = useEtherBalance(account, { chainId: Mainnet.chainId });
  // const blockNumber = useBlockNumber();
  const { data } = useToken();
  const transaction = useTransactions();
  const result = { data };
  console.log("transaction", transaction.data.transactions[1].swaps[0].id);
  // console.log("result", result);

  return (
    <div>
      <div className="header">
        <div className="text__logo">
          ShushiSwap <span className="explorer">Ex</span>
        </div>
        {account ? (
          <button className="connectWallet" onClick={deactivate}>
            Disconnect
          </button>
        ) : (
          <button
            className="connectWallet"
            onClick={() => activateBrowserWallet()}
          >
            CONNECT
          </button>
        )}
      </div>
      {account ? (
        <div className="body">
          <div className="container">
            <div className="token_header">
              <h2 className="sushi__title"> Token SushiSwap LP Token </h2>
              <h4 className="sushi__address">
                {account ? account : <span>Connect Wallet To Query Data</span>}
              </h4>
              <div className="qr_code"> </div>
            </div>
          </div>
          <div className="tables">
            <div className="contract_info">
              <div className="table_title">
                <div>Contract Information</div>
                {account ? (
                  <a
                    href={etherscan + account}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="etherscan"
                  >
                    Etherscan.io
                  </a>
                ) : (
                  ""
                )}
              </div>
              <div className="sub_title transaction_bg sushi__address">
                {/* <div className="tag">Address</div> */}
                <div className="transaction_value custom_value">
                  {account ? account : <span></span>}
                </div>
              </div>
              <div className="sub_title">
                <div className="tag"> Balance </div>
                <div className="tag_value">
                  {account && mainnetBalance ? (
                    formatEther(mainnetBalance)
                  ) : (
                    <span>Connect Wallet</span>
                  )}
                </div>
              </div>
              <div className="sub_title transaction_bg">
                <div className="tag"> Transactions </div>
                <div className="tag_value transaction_value tx_value">
                  {/* {account ? account : <span></span>} */}
                  10
                </div>
              </div>
            </div>
            <div className="contract_info info_table">
              <div className="table_title">{result.data.token.name}</div>
              <div className="sub_title transaction_bg">
                <div className="tag"> Symbol </div>
                <div className="tag_value">{result.data.token.symbol}</div>
              </div>
              <div className="sub_title">
                <div className="tag"> Total Supply </div>
                <div className="tag_value transaction_value supply">
                  {result.data.token.totalSupply}
                </div>
              </div>
              <div className="sub_title transaction_bg">
                <div className="tag"> Decimal </div>
                <div className="tag_value decimal">
                  {result.data.token.decimals}
                </div>
              </div>
              <div className="sub_title">
                <div className="tag"> Transfers </div>
                <div className="tag_value transfer"> 126673 </div>
              </div>
              <div className="sub_title transaction_bg">
                <div className="tag"> Holder </div>
                <div className="tag_value holder"> 192 </div>
              </div>
            </div>
          </div>
          <div className="historical_data">
            <div className="table_title"> Token SushiSwap Historical Data </div>
            <table>
              {transaction.data.transactions.map((transaction) => (
                <tr>
                  <td className="sushi__address tx_time">
                    <SimpleDateTime
                      dateFormat="DMY"
                      dateSeparator="/"
                      timeSeparator=":"
                    >
                      {transaction.timestamp}
                    </SimpleDateTime>
                  </td>
                  <td className="list">
                    <ul className="list-item">
                      <li className="sushi__address"> Tx: </li>
                      <li className="sushi__address"> From: </li>
                      <li className="sushi__address"> To: </li>
                    </ul>
                  </td>
                  <td className="address">
                    <ul>
                      <li className="sushi__address">
                        <span className="removeable"> Tx: </span>
                        {transaction.swaps[0].id}
                      </li>
                      <li className="sushi__address">
                        <span className="removeable"> From: </span>
                        {transaction.swaps[0].sender}
                      </li>
                      <li className="sushi__address">
                        <span className="removeable"> To: </span>
                        {transaction.swaps[0].to}
                      </li>
                    </ul>
                  </td>
                  <td className="sushi_value">
                    {transaction.swaps[0].amount0Out !== 0
                      ? transaction.swaps[0].amount0Out
                      : transaction.swaps[0].amount0In}
                    SLP
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      ) : (
        <Default />
      )}
    </div>
  );
};

export default Transaction_list;
