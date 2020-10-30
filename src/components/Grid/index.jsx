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

//import apollo client
//import { gql } from '@apollo/client';

// import styles
import './styles.styl';

const Grid = () => {
  const { news } = useContext(Context);
  //const { client } = useContext(Context);

  /*client
  .query({
    query: gql`
    query {
      searchNews(keyword:"colombia"){
        tags
      }
      
    }
    `
  })
  .then((response) => console.log(response.data.searchNews))*/

  return (
    <div className="masonry">
      <ResponsiveMasonry columnsCountBreakPoints={{ 480: 1, 700: 2, 1000: 3 }}>
        <Masonry gutter="20px">
          {news?.data?.map((card, i) => (
            <Link id="RouterNavLink" key={i} to={`/article/${card?.author}`}>
              <Card
                aria-label={'card'}
                aria-required="true"
                title={card?.title}
                image={card?.image || 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80 '}
              />
            </Link>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Grid;
