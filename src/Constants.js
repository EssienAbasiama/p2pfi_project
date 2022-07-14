export const APIURL = "https://gateway.thegraph.com/api/912b701f4ffe184fb1141cbfd51e8e9c/subgraphs/id/D7azkFFPFT5H8i32ApXLr34UQyBfxDAfKoCEK4M832M6";

const TokenId = "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2";

export const TOKEN_QUERY = `
      token{
        id: {TokenId}
        name
        symbol
        totalSupply
        decimals
      }
  `;