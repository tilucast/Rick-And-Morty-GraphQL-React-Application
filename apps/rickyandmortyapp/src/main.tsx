import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';

import { 
  ApolloClient, 
  ApolloProvider, 
  gql,
  NormalizedCacheObject,
} from '@apollo/client';
import {cache} from './cache'

const typeDefs = gql`
  extend type Query {
      characters: Int,
      locations: Int,
      episodes: Int
  }
`

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: cache,
  typeDefs
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
