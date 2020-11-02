// import react
import React, { useContext, useEffect } from 'react';
// import Hero Structure
import HeroStructure from './HeroStructure/index.jsx';
// import HeroSkeleton
import HeroSkeleton from './HeroSkeleton/index.jsx';
// import context
import { Context } from '../../utils/Context/index.jsx';
// use styles
import './styles.styl';

// create and export Hero component
const Hero = ({ background, caption }) => {
  //use Context  
  const { news } = useContext(Context);

  useEffect(() => {
    return () => {
      news.loading = false;
    };
  }, []);

  //validate the value of the loading and thus determine which component to render
  return news?.loading ? (
    <HeroSkeleton />
  ) : (
    <HeroStructure background={background} caption={caption} />
  );
};

export default Hero;
