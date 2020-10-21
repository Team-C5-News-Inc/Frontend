// import react
import React from 'react';
// import shallow
import { shallow } from 'enzyme';
// import app component
import Footer from '../../components/Footer';

describe('<Footer />', () => {
  const wrapper = shallow(<Footer />);

  it('is render the Footer?', () => {
    expect(wrapper.exists()).toBe(true)
  });

  it('are there Footer page?', () => {
    expect(wrapper.find('.footer').exists()).toBe(true)
  });
});
