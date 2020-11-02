// import React
import React, { useContext, useState } from 'react';
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

//Creates Grid component
const Grid = () => {
  //Call to global context
  const { news } = useContext(Context);
  const { setAction } = useContext(Context);
  const [count, setCount] = useState(1)
  //Sets next page to call on the api
  const nextPage = () => {
    setCount(count + 1)
    setAction({ option: 4, action: count })
  }

  //Masonry layout for cards
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
        <button onClick={nextPage} id="lazy" className={`masonry__loading--button ${count}`} >
          More news
        </button>
      </section>
    </div>
  );
};

//exports the component
export default Grid;
