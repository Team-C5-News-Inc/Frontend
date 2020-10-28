// import react
import React from 'react';
// import shallow
import { mount } from 'enzyme';
// import toJson
import toJson from 'enzyme-to-json';
// import app component
import Article from '../../pages/Article/index.jsx';

describe('<Article/>', () => {
  const wrapper = mount(<Article/>);

  it('is rendering the Article?', () => {
    expect(wrapper.exists()).toBe(true);
  })

  it('is rendering the skeleton?', () => {
    expect(wrapper.find('ArticleSkeleton').length).toBe(1);
  })

  it('matches the snap shot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})
