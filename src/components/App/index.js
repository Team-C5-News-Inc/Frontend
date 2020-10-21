// import react
import React from 'react';
// import Home page
import Home from '../../pages/Home';
// import logo component
import Logo from '../../assets/Logo';
import Footer from '../Footer';

//create and export app component
const App = () => {
  return (
    <>
      <Home />
      <Logo />
      <Footer />
    </>
  );
};

export default App;
