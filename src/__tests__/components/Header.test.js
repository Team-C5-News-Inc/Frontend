// import react
import React from 'react';
// import shallow
import { shallow, mount } from 'enzyme';
// import router
import { HashRouter as Router } from 'react-router-dom';
// import context provider
import { ContextProvider } from '../../utils/Context/index.jsx';
// import toJson
import toJson from 'enzyme-to-json';
// import app component
import Header from '../../components/Header/index.jsx';

describe('<Header /> shallow', () => {
  const wrapper = shallow(
    <ContextProvider>
      <Router>
        <Header />
      </Router>
    </ContextProvider>,
  );

  it('is the Header rendering?', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('is there a header tag?', () => {
    expect(wrapper.find('header').exists()).toBe(false);
  });

  it('header has an only child?', () => {
    expect(wrapper.find('header').children().length).toBe(0);
  });

  it('matches the snap shot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('<Header /> mount', () => {
  const wrapper = mount(
    <ContextProvider>
      <Router>
        <Header />
      </Router>
    </ContextProvider>,
  );

  it('is the Header rendering?', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('is there a header tag?', () => {
    expect(wrapper.find('header').exists()).toBe(true);
  });

  it('header has an only child?', () => {
    expect(wrapper.find('header').children().length).toBe(1);
  });

  it('header has a link component?', () => {
    expect(wrapper.find('Link').exists()).toBe(true);
  });

  it('does the header link component has the correct route?', () => {
    expect(wrapper.find('Link').first().prop('to')).toBe('/');
  });
});
