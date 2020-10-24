// import React
import React from 'react';
// import masonry
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
// import card
import Card from '../Card/index.jsx';
// import styles
import './styles.styl';

const Grid = () => {

  const cards = []

  return (
    <div className="masonry">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 480: 1, 700: 2, 1000: 2 }}
      >
        <Masonry gutter="20px">
          {cards.map((card, i) => <Card key={i} title={card?.title} image={card?.image} />)}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Grid;
