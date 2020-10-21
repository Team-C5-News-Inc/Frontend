// import react
import React from 'react';
// import shallow
import { shallow, mount } from 'enzyme';
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
    expect(wrapper.find('header').children().length).toBe(1)
  })
});

describe('<Header /> mount', () => {
  const wrapper = mount(<Header />);

  it('is render the Header?', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('are there a header tag?', () => {
    expect(wrapper.find('header').exists()).toBe(true);
  });

  it('should header have only child?', () => {
    expect(wrapper.find('header').children().length).toBe(1)
  })
})
