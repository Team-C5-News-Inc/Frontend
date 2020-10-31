// import react
import React from 'react';
// import shallow
import { shallow } from 'enzyme';
//import card component
import SearchF from '../../pages/SearchF/index.jsx';

describe('<SearchF/>', () => {
  const wrapper = shallow(<SearchF/>);

  it('Renders the failed search component', () => {
    expect(wrapper.exists()).toBe(true);
  })

  it('Is there a class card component?', () => {
    expect(wrapper.find('.searchF').exists()).toBe(true);
  })

  it('has two children?', () => {
    expect(wrapper.find('.searchF').children().length).toBe(2);
  })

})
