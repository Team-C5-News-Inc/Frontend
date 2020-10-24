// import react
import React from 'react';
// import shallow
import { shallow, mount } from 'enzyme';
// import router
import { HashRouter as Router } from 'react-router-dom';
// import toJson
import toJson from 'enzyme-to-json';
// import app component
import Header from '../../components/Header/index.jsx';

describe('<Header /> shallow', () => {
  const wrapper = shallow(<Header />);

  it('is render the Header?', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('are there a header tag?', () => {
    expect(wrapper.find('header').exists()).toBe(true);
  });

  it('should header have only child?', () => {
    expect(wrapper.find('header').children().length).toBe(1);
  });

  it('matches the snap shot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('<Header /> mount', () => {
  const wrapper = mount(
    <Router>
      <Header />
    </Router>,
  );

  it('is render the Header?', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('are there a header tag?', () => {
    expect(wrapper.find('header').exists()).toBe(true);
  });

  it('should header have only child?', () => {
    expect(wrapper.find('header').children().length).toBe(1);
  });

  it('should header link component?', () => {
    expect(wrapper.find('Link').exists()).toBe(true);
  });

  it('should header link component has the correct route?', () => {
    expect(wrapper.find('Link').prop('to')).toBe('/');
  });
});
