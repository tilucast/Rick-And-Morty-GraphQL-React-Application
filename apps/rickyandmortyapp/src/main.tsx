import { ApolloClient, ApolloProvider, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/app';

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache({})
})

ReactDOM.render(
  //<React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
  //</React.StrictMode>,
  document.getElementById('root')
);
