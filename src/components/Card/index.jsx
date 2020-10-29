// import react
import React, { useContext, useEffect } from 'react';
// import card skeleton
import CardStructure from './CardStructure/index.jsx';
// import card skeleton
import CardSkeleton from './CardSkeleton/index.jsx';
// import context
import { Context } from '../../utils/Context/index.jsx';
// import styles
import './styles.styl';

const Card = ({ images, title }) => {
  const { news } = useContext(Context);

  useEffect(() => {
    return () => {
      news.loading = false;
    };
  }, []);

  return news?.loading ? (
    <CardSkeleton />
  ) : (
    <CardStructure images={images} title={title} />
  );
};

export default Card;
