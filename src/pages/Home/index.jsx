/* eslint-disable max-len */
// import react
import React from 'react';
// import hero component
import Hero from '../../components/Hero/index.jsx';
// import header
import Header from '../../components/Header/index.jsx';

// create and export Home page
const Home = () => (
  <>
    <Header />
		I&apos;m the Home page :/
    <Hero
      caption="Top 10 amazing things 2020"
      background="https://images.unsplash.com/photo-1601907532353-3c9176919f38?ixlib=rb-1.2.1&auto=format&fit=crop&w=982&q=80"
    />
  </>
);

export default Home;
