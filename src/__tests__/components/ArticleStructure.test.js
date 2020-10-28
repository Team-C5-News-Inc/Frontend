// import react
import React from 'react';
// import shallow
import { mount } from 'enzyme';
// import toJson
import toJson from 'enzyme-to-json';
// import router
import { HashRouter as Router } from 'react-router-dom';
// import app component
import ArticleStructure from '../../pages/Article/ArticleStructure/index.jsx';
// import context provider
import { ContextProvider } from '../../utils/Context/index.jsx';

describe('<Article ...props/>', () => {
  const wrapper = mount(
    <ContextProvider>
      <Router>
        <ArticleStructure />
      </Router>
    </ContextProvider>,
  );

  it('is the Article rendering?', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('is the headline rendering?', () => {
    expect(wrapper.find('.post__content--headline').exists()).toBe(true)
  });
});
