// import react
import React, { useContext, useEffect } from 'react';
// import card skeleton
import CardSkeleton from './CardSkeleton/index.jsx';
// import context
import { Context } from '../../utils/Context/index.jsx';
// import styles
import './styles.styl';

// import CardStructure for the render to be dynamic

const CardStructure = React.lazy(() => import('./CardStructure/index.jsx'))

//Creates Card component
const Card = ({ images, title }) => {
  //Use context
  const { news } = useContext(Context);

  useEffect(() => {
    return () => {
      news.loading = false;
    };
  }, []);
  //Until it gets the data, shows the skeleton
  return news?.loading ? (
    <CardSkeleton />
  ) : (
    <React.Suspense fallback={<CardSkeleton />}>
      <CardStructure images={images} title={title} />
    </React.Suspense>
  );
};

//Exports the component
        
export default Card;
