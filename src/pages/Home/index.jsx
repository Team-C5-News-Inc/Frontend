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
    setNew$(news?.data?.[Math.floor(Math.random() * news?.data?.length)]);
  }, [news]);

  return (
    <>
      <Link to={`/article/${new$?._id}`}>
        <Hero
          caption={new$?.title}
          background={`${
            /^https?:\/\/|^http?:\/\//.test(new$?.images[0]) ?
              new$?.images[0] :
              `${/^www?:\/\//.test(new$?.images[0])}` &&
							`https://${new$?.images[0]}`
          }`}
        />
      </Link>
      <Grid />
    </>
  );
};

export default Home;
