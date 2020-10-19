// import react
import React from 'react';
// import render method
import { render } from 'react-dom';
// import app component
import App from './components/App';
//import global styles
import './globalStyles.styl'

// crete root const
const root = document.getElementById('root');

// render the app
render(<App />, root);
