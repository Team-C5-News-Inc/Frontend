// import react
import React from 'react';
// import shallow
import { shallow } from 'enzyme';
//import card component
import Grid from '../../components/Grid';

describe('<Grid/>', () => {
  const wrapper = shallow(<Grid/>);

  it('Render the Grid component', () => {
    expect(wrapper.exists()).toBe(true);
  })

  it('Is there a class masonry component?', () => {
    expect(wrapper.find('.masonry').exists()).toBe(true);
  })

  it('Only one child?', () => {
    expect(wrapper.find('.masonry').children().length).toBe(1);
  })

  it('Is there a ResponsiveMasonry element?', () => {
    expect(wrapper.find('ResponsiveMasonry').exists());
  })

  it('Is there a masonry-layout element?', () => {
    expect(wrapper.find('Masonry').exists()).toBe(true);
  })
})
