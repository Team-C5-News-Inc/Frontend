// import react
import React from 'react';
// import shallow
import { mount } from 'enzyme';
// import toJson
import toJson from 'enzyme-to-json';
// import app component
import Menu from '../../components/Menu/index.jsx';

describe('<Menu />', () => {
  const wrapper = mount(<Menu />);

  it('is render the Menu?', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('is there i element?', () => {
    expect(wrapper.find('i').exists()).toBe(true);
  });

  it('is there slide right class name?', () => {
    expect(wrapper.find('div').props().className).toBe('menu slide-right');
  });

  it('is there slide left class name?', () => {
    // expect(wrapper.find('div').props)

    wrapper.find('i').simulate('click')

    expect(wrapper.find('div').props().className).toBe('menu slide-left');
  });

  it('matches the snap shot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
