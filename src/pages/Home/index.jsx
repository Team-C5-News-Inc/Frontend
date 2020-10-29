/* eslint-disable max-len */
// import react
import React, { useContext, useEffect, useState } from 'react';
// import link
import { Link } from 'react-router-dom';
// import context
import { Context } from '../../utils/Context/index.jsx';
// import hero component
import Hero from '../../components/Hero/index.jsx';
// import Masonry
import Grid from '../../components/Grid/index.jsx';

// create and export Home page
const Home = () => {
  // use state
  const [new$, setNew$] = useState();
  // use context
  const { news } = useContext(Context);
  // use effect
  useEffect(() => {
    setNew$(news?.data?.[Math.floor(Math.random() * news?.data?.length)])
  }, [news]);

  return (
    <>
      <Link to={`/article/${new$?.author}`} >
        <Hero
          caption={new$?.title}
          background={`http://${new$?.images[0]}` || 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80 '}
        />
      </Link>
      <Grid />
    </>
  );
};

export default Home;
