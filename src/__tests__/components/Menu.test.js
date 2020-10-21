// import react
import React from 'react';
// import shallow
import { mount } from 'enzyme';
// import app component
import Menu from '../../components/Menu/index.jsx';

describe('<Menu />', () => {
  const wrapper = mount(<Menu />);

  it('is render the Menu?', () => {
    expect(wrapper.exists()).toBe(true);
  });

});
