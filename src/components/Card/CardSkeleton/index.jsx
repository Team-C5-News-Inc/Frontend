// import react
import React from 'react';
//import react-loading-skeleton package
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

// Creates skeleton for card component
const CardSkeleton = () => {
  return (
    <SkeletonTheme color="#36404e" highlightColor="#2E2E32">
      <div className="card" aria-label="card" >
        <Skeleton height={320}/>
      </div>
    </SkeletonTheme>
  )
};

// exports the component
export default CardSkeleton;
