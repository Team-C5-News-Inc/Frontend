// import react
import React from 'react';
// import hash router
import { HashRouter as Router, Switch } from 'react-router-dom';
// import Home page
import Home from '../../pages/Home/index.jsx';

//create and export app component
const App = () => {
  return (
    <Router basename="/">
      <Switch>
        <Home />
      </Switch>
    </Router>
  );
};

export default App;
