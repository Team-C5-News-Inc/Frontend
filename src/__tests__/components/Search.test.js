// import react
import React from 'react';
// import shallow
import { mount } from 'enzyme';
// import toJson
import toJson from 'enzyme-to-json';
// import app component
import Search from '../../components/Search/index.jsx';

describe('<Search />', () => {
  const wrapper = mount(<Search />);

  it('is render the Search?', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('is there searchformOff class?', () => {
    expect(wrapper.find('.searchformOff').exists()).toBe(true);
  });

  it('is there off off class name?', () => {
    expect(wrapper.find('.searchformOff').props().className).toBe('searchformOff off');
  });

  it('is there slide left class name?', () => {
    wrapper.find('.search').simulate('click')

    expect(wrapper.find('.searchformOff').props().className).toBe('searchformOff slide_search-left searchform');
  });

  it('matches the snap shot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
