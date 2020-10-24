// import react
import React from 'react';
// import render method
import { render } from 'react-dom';
// import app component
import App from './components/App/index.jsx';
// import context provider
import { ContextProvider } from './utils/Context/index.jsx';
//import global styles
import './stylus/globalStyles.styl';

// crete root const
const root = document.getElementById('root');

// render the app
render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  root,
);
