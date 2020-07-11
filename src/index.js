import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'pages/Home/Home';
import * as serviceWorker from './serviceWorker';

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import rootReducer from 'redux/slices'

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context';

// -- graphql init

const httpLink = new HttpLink({
  uri: process.env.NODE_ENV === 'production' ? 'https://xyl-backend.herokuapp.com/graphql' : 'http://localhost:4000/graphql'
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
})

// -- redux init

const store = configureStore({ reducer: rootReducer, devTools: true})


ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App/>
    </ApolloProvider>
  </Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
