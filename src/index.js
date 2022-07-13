import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
const APIURL =
  "https://gateway.thegraph.com/api/7035b37f7fc0499175f884193d50f5d9/subgraphs/id/D7azkFFPFT5H8i32ApXLr34UQyBfxDAfKoCEK4M832M6";

  const client = new ApolloClient({
    uri: APIURL,
    cache: new InMemoryCache(),
  });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client = { client}>
    <App />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
