// import react
import React from 'react';
// use styles
import './styles.styl';

// create and export Hero component
const Hero = ({ background }) => (
  <div className="home__hero-container">
    <figure className="home__hero-figure">
      <img className="home__hero-image" src={background}/>
      <h1 className="home__hero-caption">I&apos;m the Hero</h1>
    </figure>
  </div>
);

export default Hero;
