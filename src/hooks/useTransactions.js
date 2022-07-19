import { useQuery, gql } from "@apollo/client";

const TRANSACTION_QUERY = gql `
  {
   transactions(first:10){
    id
    blockNumber
    timestamp
    swaps{
      id
      to
      sender
      amount1In  
      amount0Out 
      amount1Out 
      amount0In
      amountUSD
    }
  }
  }
`;

export const useTransactions = () => {
    const transaction = useQuery(TRANSACTION_QUERY)
    return transaction;
}