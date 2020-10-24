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
          <Route path="/article">
            <Article
              title="Headline"
              subtitle="Subtitle"
              author="Author"
              date="Date"
              image="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque facilisis interdum placerat. Phasellus porttitor porta urna, vitae consectetur risus imperdiet a. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis quis luctus enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin aliquet est ipsum, ut accumsan nibh rhoncus eu. Aenean in dolor consectetur neque sodales pharetra. Phasellus a elit quam. Nullam luctus purus sed tempor fringilla. Suspendisse non varius metus, at varius ex. Aliquam ut placerat odio."
            />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
