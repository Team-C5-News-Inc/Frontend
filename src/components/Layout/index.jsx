// import React
import React from 'react';
// import Header component
import Header from '../Header/index.jsx';

// import footer
import Footer from '../Footer/index.jsx';

// create and export Layout component
const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
