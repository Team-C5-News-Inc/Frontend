import React from 'react';
// import shallow
import { shallow } from 'enzyme';
// import app component
import Article from '../../pages/Article/index.jsx';

describe('<Article />', () => {
  const wrapper = shallow(<Article />);

  it('is render the Article page?', () => {
    expect(wrapper.exists()).toBe(true)
  });

  it('is there a post Container class?', () => {
    expect(wrapper.find('.postContainer').exists()).toBe(true)
  });
});
