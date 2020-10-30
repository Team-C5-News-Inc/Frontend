// import React
import React, { useContext } from 'react';
// import masonry
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
// import card`/article/${i}`
import Card from '../Card/index.jsx';
// import link
import { Link } from 'react-router-dom';
// import context
import { Context } from '../../utils/Context/index.jsx';
// import styles
import './styles.styl';

const Grid = () => {
  const { news } = useContext(Context);

  return (
    <div className="masonry">
      <ResponsiveMasonry columnsCountBreakPoints={{ 480: 1, 700: 2, 1000: 3 }}>
        <Masonry gutter="20px">
          {news?.data?.map((card, i) => (
            <Link id="RouterNavLink" key={i} to={`/article/${card?._id}`}>
              <Card
                aria-label={'card'}
                aria-required="true"
                title={card?.title}
                images={card?.images}
              />
            </Link>
          ))}
        </Masonry>
      </ResponsiveMasonry>
      <section className="masonry__loading">
        <button onClick={''} id="lazy" className="masonry__loading--button" >
          Más noticias
        </button>
      </section>
    </div>
  );
};

export default Grid;