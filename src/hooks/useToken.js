import { useQuery, gql } from "@apollo/client";

const TOKEN_QUERY = gql `
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


export const useToken = () => {
    const { error, data, loading } = useQuery(TOKEN_QUERY);
    return {
        error,
        data,
        loading

    };
}