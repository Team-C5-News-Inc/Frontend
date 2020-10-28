// import react
import React from 'react';
//import react-loading-skeleton
import Skeleton from 'react-loading-skeleton';

const HeroSkeleton = () => {
  return (
    <div
      aria-label="hero content"
      className={'home__hero-container'}
    >
      <Skeleton width={1200} height={320}/>
    </div>
  )
};

export default HeroSkeleton;
