// import react
import React from 'react';
// use styles
import './styles.styl';

// create and export Hero component
const Hero = ({ background, caption, type = 'large' }) => (
  <div aria-label className={`home__hero-container ${type === 'small' && 'small'}`}>
    <h1 className="home__hero-caption">{caption}</h1>
    <figure className="home__hero-figure">
      <img className="home__hero-image" src={background} />
    </figure>
  </div>
);

export default Hero;
