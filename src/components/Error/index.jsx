import React from 'react';
import './styles.styl';

const Error = ({ message, subtitle }) => (
  <div className="container">
    <h1 className="container__text container__animated rubberBand">{message}</h1>
    <h2 className="container__subtitle">{subtitle}</h2>
  </div>
);

export default Error;
