// import react
import React from 'react';
// import apollo client
import ApolloClient from 'apollo-boost';
// import Apollo provider
import { ApolloProvider } from '@apollo/react-hooks';

export const GraphqlProvider = ({ children }) => {
  const client = new ApolloClient({
    uri: 'https://backend-platzi-news.herokuapp.com/search',
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
