// import react
import React from 'react';
// import shallow
import { shallow, mount } from 'enzyme';
// import app component
import Menu from '../../components/Menu/index.jsx';

describe('<Menu />', () => {
  const wrapper = shallow(<Menu />);

  it('is render the Menu?', () => {
    expect(wrapper.exists()).toBe(true);
  });

});
