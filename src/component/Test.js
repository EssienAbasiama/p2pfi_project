import React from "react";
import { useQuery, gql } from "@apollo/client";

  const TOKEN_QUERY = gql`
    {
      token(id: "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2") {
        id: id
        name
        symbol
        totalSupply
        decimals
      }
    }
  `;
export default function Test() {
    
    const {data, error, loading} = useQuery(TOKEN_QUERY);
    console.log({ data, error , loading});
  return <div> test </div>;
}

