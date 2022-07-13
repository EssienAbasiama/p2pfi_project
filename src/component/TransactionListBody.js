import React from "react";

function transactionListBody() {
  return (
    <div className="body">
      <div className="container">
        <div className="token_header">
          <h2 className="sushi__title"> Token SushiSwap LP Token </h2>{" "}
          <h4 className="sushi__address">
            0xC3f279090a47e80990Fe3a9c30d24Cb117EF91a8{" "}
          </h4>{" "}
          <div className="qr_code"> </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="tables">
        <div className="contract_info">
          <div className="table_title"> Contract Information </div>{" "}
          <div className="sub_title transaction_bg sushi__address">
            {" "}
            {/* <div className="tag">Address</div> */}{" "}
            <div className="transaction_value custom_value">
              0xC3f279090a47e80990Fe3a9c30d24Cb117EF91a8{" "}
            </div>{" "}
          </div>{" "}
          <div className="sub_title">
            <div className="tag"> Balance </div>{" "}
            <div className="tag_value"> 0.0 </div>{" "}
          </div>{" "}
          <div className="sub_title transaction_bg">
            <div className="tag"> Transactions </div>{" "}
            <div className="tag_value transaction_value tx_value">
              {" "}
              11, 670{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="contract_info info_table">
          <div className="table_title"> SushiSwap Info. </div>{" "}
          <div className="sub_title transaction_bg">
            <div className="tag"> Symbol </div>{" "}
            <div className="tag_value"> SLP </div>{" "}
          </div>{" "}
          <div className="sub_title">
            <div className="tag"> Total Supply </div>{" "}
            <div className="tag_value transaction_value supply">
              21, 229.645748275787{" "}
            </div>{" "}
          </div>{" "}
          <div className="sub_title transaction_bg">
            <div className="tag"> Decimal </div>{" "}
            <div className="tag_value decimal"> 18 </div>{" "}
          </div>{" "}
          <div className="sub_title">
            <div className="tag"> Transfers </div>{" "}
            <div className="tag_value transfer"> 126673 </div>{" "}
          </div>{" "}
          <div className="sub_title transaction_bg">
            <div className="tag"> Holder </div>{" "}
            <div className="tag_value holder"> 192 </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
      <div className="historical_data">
        <div className="table_title"> Token SushiSwap Historical Data </div>{" "}
        <table>
          <tr>
            <td className="sushi__address tx_time"> a day ago </td>{" "}
            <td className="list">
              <ul className="list-item">
                <li className="sushi__address"> Tx: </li>{" "}
                <li className="sushi__address"> From: </li>{" "}
                <li className="sushi__address"> To: </li>{" "}
              </ul>{" "}
            </td>{" "}
            <td className="address">
              <ul>
                <li className="sushi__address">
                  <span className="removeable"> Tx: </span>
                  0x21f3d67f38cf694aee949e49dc8893e3608c2a49eca9ba2b0c9f19dce804b
                  5 a6{" "}
                </li>{" "}
                <li className="sushi__address">
                  <span className="removeable"> From: </span>
                  0x0000000000000000000000000000000000000 000{" "}
                </li>{" "}
                <li className="sushi__address">
                  <span className="removeable"> To: </span>
                  0x7355ca5613e3c943f6df3652e7fc4e4a8b800 976{" "}
                </li>{" "}
              </ul>{" "}
            </td>{" "}
            <td className="sushi_value"> 0.5763046012210701 SLP </td>{" "}
          </tr>
          <tr>
            <td className="sushi__address tx_time"> a day ago </td>{" "}
            <td className="list">
              <ul className="list-item">
                <li className="sushi__address"> Tx: </li>{" "}
                <li className="sushi__address"> From: </li>{" "}
                <li className="sushi__address"> To: </li>{" "}
              </ul>{" "}
            </td>{" "}
            <td className="address">
              <ul>
                <li className="sushi__address">
                  <span className="removeable"> Tx: </span>
                  0x21f3d67f38cf694aee949e49dc8893e3608c2a49eca9ba2b0c9f19dce804b
                  5 a6{" "}
                </li>{" "}
                <li className="sushi__address">
                  <span className="removeable"> From: </span>
                  0x0000000000000000000000000000000000000 000{" "}
                </li>{" "}
                <li className="sushi__address">
                  <span className="removeable"> To: </span>
                  0x7355ca5613e3c943f6df3652e7fc4e4a8b800 976{" "}
                </li>{" "}
              </ul>{" "}
            </td>{" "}
            <td className="sushi_value"> 0.5763046012210701 SLP </td>{" "}
          </tr>
          <tr>
            <td className="sushi__address tx_time"> a day ago </td>{" "}
            <td className="list">
              <ul className="list-item">
                <li className="sushi__address"> Tx: </li>{" "}
                <li className="sushi__address"> From: </li>{" "}
                <li className="sushi__address"> To: </li>{" "}
              </ul>{" "}
            </td>{" "}
            <td className="address">
              <ul>
                <li className="sushi__address">
                  <span className="removeable"> Tx: </span>
                  0x21f3d67f38cf694aee949e49dc8893e3608c2a49eca9ba2b0c9f19dce804b
                  5 a6{" "}
                </li>{" "}
                <li className="sushi__address">
                  <span className="removeable"> From: </span>
                  0x0000000000000000000000000000000000000 000{" "}
                </li>{" "}
                <li className="sushi__address">
                  <span className="removeable"> To: </span>
                  0x7355ca5613e3c943f6df3652e7fc4e4a8b800 976{" "}
                </li>{" "}
              </ul>{" "}
            </td>{" "}
            <td className="sushi_value"> 0.5763046012210701 SLP </td>{" "}
          </tr>{" "}
        </table>{" "}
      </div>{" "}
    </div>
  );
}

export default transactionListBody;
