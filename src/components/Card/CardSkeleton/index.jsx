// import react
import React from 'react';
//import react-loading-skeleton
import Skeleton from 'react-loading-skeleton';

const CardSkeleton = () => {
  return (
    <div className="card" aria-label="card" >
      <Skeleton width={380} height={320}/>
    </div>
  )
};

export default CardSkeleton;
