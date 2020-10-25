import React from 'react';
// import shallow
import { shallow } from 'enzyme';
// import app component
import About from '../../pages/About/index.jsx';

describe('<About />', () => {
  const wrapper = shallow(<About />);

  it('is render the About?', () => {
    expect(wrapper.exists()).toBe(true)
  });

  it('is a container class?', () => {
    expect(wrapper.find('.about').exists()).toBe(true)
  });

  it('are there correct the title?', () => {
    expect(wrapper.find('h1').text()).toBe('About')
  });

  it('are have one child?', () => {
    expect(wrapper.children().length).toBe(1)
  });
});
