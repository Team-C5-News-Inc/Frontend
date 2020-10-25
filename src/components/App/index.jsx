// import react
import React from 'react';
// import hash router
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
// import Home page
import Home from '../../pages/Home/index.jsx';
// import team page
import Team from '../../pages/Team/index.jsx';
// import article page
import Article from '../../pages/Article/index.jsx';
//import about page
import About from '../../pages/About/index.jsx'
// import layout component
import Layout from '../Layout/index.jsx';
// import page error
import Error from '../Error/index.jsx';

//create and export app component
const App = () => {
  return (
    <Router basename="/">
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/article/:name">
            <Article/>
          </Route>
          <Route>
            <Error
              message="ERROR 404"
              subtitle="Ups looks like a problem"
            />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
