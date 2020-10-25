// import react
import React from 'react';
// use styles
import './styles.styl';

// create and export Hero component
const Hero = ({ background, caption, type = 'large' }) => (
  <div
    aria-label="hero content"
    className={`home__hero-container ${type === 'small' && 'small'}`}>
    <h1 aria-label="hero title" className="home__hero-caption">
      {caption}
    </h1>
    <figure aria-label="hero figure" className="home__hero-figure">
      <img
        aria-label="hero image"
        className="home__hero-image"
        src={background}
        alt={`${caption} image`}
      />
    </figure>
  </div>
);

export default Hero;
