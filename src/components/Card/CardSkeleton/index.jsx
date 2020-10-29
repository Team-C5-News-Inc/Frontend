// import react
import React from 'react';
//import react-loading-skeleton
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const CardSkeleton = () => {
  return (
    <SkeletonTheme color="#36404e" highlightColor="#2E2E32">
      <div className="card" aria-label="card" >
        <Skeleton height={320}/>
      </div>
    </SkeletonTheme>
  )
};

export default CardSkeleton;
