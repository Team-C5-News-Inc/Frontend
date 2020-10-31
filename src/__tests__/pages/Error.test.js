import React from 'react';
// import shallow
import { shallow } from 'enzyme';
// import app component
import Error from '../../pages/Error/index.jsx';

describe('<Error />', () => {
  const wrapper = shallow(<Error />);

  it('is render the Error?', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('is a container class?', () => {
    expect(wrapper.find('.container').exists()).toBe(true);
  });

  it('are there correct the title?', () => {
    expect(wrapper.find('h1').text()).toBe('');
  });

  it('are have two child?', () => {
    expect(wrapper.children().length).toBe(2);
  });
});
