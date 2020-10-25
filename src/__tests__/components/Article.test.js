// import react
import React from 'react';
// import shallow
import { mount } from 'enzyme';
// import toJson
import toJson from 'enzyme-to-json';
// import router
import { HashRouter as Router } from 'react-router-dom';
// import app component
import Article from '../../pages/Article';
// import context provider
import { ContextProvider } from '../../utils/Context/index.jsx';

describe('<Article ...props/>', () => {
  const wrapper = mount(
    <ContextProvider>
      <Router>
        <Article />
      </Router>
    </ContextProvider>,
  );

  it('is render the Article?', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('is render the headline?', () => {
    expect(wrapper.find('.post__content--headline').exists()).toBe(true)
  });

  wrapper.setProps({ $news: { title: 'random', image: 'random' } })

  it('is render the src?', () => {
    expect(wrapper.find('.post__content--image').prop('src')).toBe();
  });

  it('matches the snap shot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
