/* This page is the one that is presented at the time of errors when finding a non-existent route or a service or server down */
// import react
import React from 'react';
// import styles
import './styles.styl';

// create and export error 404 page
const Error = ({ message, subtitle }) => (
  <div className="container">
    <h1 className="container__text container__animated rubberBand">{message}</h1>
    <h2 className="container__subtitle">{subtitle}</h2>
  </div>
);

export default Error
