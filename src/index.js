import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'pages/Home/Home';
import * as serviceWorker from './serviceWorker';

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// -- graphql init

const httpLink = new HttpLink({
  uri: process.env.NODE_ENV === 'production' ? 'https://xyl-backend.herokuapp.com/graphql' : 'http://localhost:4000/graphql'
})

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache,
})

const showLoader = (loader) => loader.classList.remove('loader--hide');

const hideLoader = (loader) => loader.classList.add('loader--hide');

// -- store init
client.writeData({
  data: {
    loadState: {
      __typename: 'LoadState',
      showLoading: showLoader.toString(),
      hideLoading: hideLoader.toString(),
    },
  }
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
