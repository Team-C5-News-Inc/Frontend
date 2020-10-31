// import react
import React from 'react';
// import render method
import ReactDom from 'react-dom';
// import babel polyfill <3
import '@babel/polyfill';
// import app component
import App from './components/App/index.jsx';
// import context provider
import { ContextProvider } from './utils/Context/index.jsx';

//import global styles
import './stylus/globalStyles.styl';

// crete root const
const root = document.getElementById('root');

// render the app
ReactDom.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  root,
);
