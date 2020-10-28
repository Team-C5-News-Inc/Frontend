// import react
import React from 'react';
//import react-loading-skeleton
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const HeroSkeleton = () => {
  return (
    <SkeletonTheme color="#36404e" highlightColor="#2E2E32">
      <div
        aria-label="hero content"
        className={'home__hero-container'}
      >
        <Skeleton width={1200} height={320}/>
      </div>
    </SkeletonTheme> 
  )
};

export default HeroSkeleton;
