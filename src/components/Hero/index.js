// import react
import React from 'react';
// use styles
import './styles.styl';

// create and export Hero component
const Hero = ({ background, caption }) => (
  <div className="home__hero-container">
    <figure className="home__hero-figure">
      <img className="home__hero-image" src={background} />
    </figure>
    <h1 className="home__hero-caption">{caption}</h1>
  </div>
);

export default Hero;
