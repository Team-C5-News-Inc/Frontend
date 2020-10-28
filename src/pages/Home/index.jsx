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

  console.log(new$)

  return (
    <>
      <Link to={`/article/${new$?.author}`} >
        <Hero
          caption={new$?.title}
          background={new$?.image || 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3OACZKecLGqNCdYg35qC4hY8ByncPpj_6MQ&usqp=CAU '}
        />
      </Link>
      <Grid />
    </>
  );
};

export default Home;
