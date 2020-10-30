// import react
import React from 'react';
// import render method
import ReactDom from 'react-dom';
// import babel polyfill
import '@babel/polyfill';
// import app component
import App from './components/App/index.jsx';
// import context provider
import { ContextProvider } from './utils/Context/index.jsx';
// import context provider
import { GraphqlProvider } from './utils/apollo/ApolloProvider.jsx';
//import global styles
import './stylus/globalStyles.styl';

// crete root const
const root = document.getElementById('root');

// render the app
ReactDom.render(
  <GraphqlProvider>
    <ContextProvider>
      <App />
    </ContextProvider>
  </GraphqlProvider>,
  root,
);
