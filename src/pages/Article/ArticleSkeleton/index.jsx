/* This component is the one that allows to carry out the layout prior to loading the elements such as images or texts, it is important so that the page does not show a messy appearance while it is loading */
// import react
import React from 'react';
//import react-loading-skeleton
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const ArticleSkeleton = () => {
  return (
    <SkeletonTheme color="#36404e" highlightColor="#2E2E32">
      <article className="post">
        <section className="post__content">
          <div className="post__content--headline">
            <h1>
              <Skeleton height={100}/>
            </h1>
          </div>
          <div className="post__content--image">
            <Skeleton height={400}/>
          </div>
          <div className="post__content--text">
            <p>
              <Skeleton/>
              <Skeleton/>
              <Skeleton/>
              <Skeleton/>
              <Skeleton/>
              <Skeleton/>
            </p>
            <br/>
            <p>
              <Skeleton/>
              <Skeleton/>
              <Skeleton/>
              <Skeleton/>
              <Skeleton/>
            </p>
            <br/>
            <p>
              <Skeleton/>
              <Skeleton/>
              <Skeleton/>
              <Skeleton/>
              <Skeleton/>
            </p>
          </div>
        </section>
      </article>
    </SkeletonTheme>
  )
};

export default ArticleSkeleton;
