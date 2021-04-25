import React from "react";

import { useQuery, gql } from '@apollo/client';

import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});

client
  .query({
    query: gql`
      query GetRates {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then(result => console.log(result));

  const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

 export default function GettingStarted() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

    return data.rates.map(({ currency, rate }) => (
      
      <div key={currency}>
        <p>
          {currency}: {rate}
        </p>
        </div>
    ));
} 
// <p>Add code for the <a href="https://www.apollographql.com/docs/react/get-started/">Apollo Getting Started Example</a> </p>
     
