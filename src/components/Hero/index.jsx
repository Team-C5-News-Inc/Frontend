// import react
import React, { useState, useEffect } from 'react';
// import Hero Structure
import HeroStructure from './HeroStructure/index.jsx'
// import HeroSkeleton
import HeroSkeleton from './HeroSkeleton/index.jsx'
// use styles
import './styles.styl';

// create and export Hero component
const Hero = ({ background, caption }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = () => setTimeout(() => {
      setLoading(false);
    }, 2000);

    timer()

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return loading ? <HeroSkeleton /> : <HeroStructure background={background} caption={caption} />;
}

export default Hero;
