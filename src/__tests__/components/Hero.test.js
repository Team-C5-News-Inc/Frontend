// import react
import React from 'react';
// import shallow
import { shallow } from 'enzyme';
// import app component
import Hero from '../../components/Hero';

describe('<Hero />', () => {
  const wrapper = shallow(<Hero />);

  it('is render the Hero?', () => {
    expect(wrapper.exists()).toBe(true)
  });

});
