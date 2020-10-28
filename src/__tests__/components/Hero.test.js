// import react
import React from 'react';
// import shallow
import { mount } from 'enzyme';
// import toJson
import toJson from 'enzyme-to-json';
// import app component
import Hero from '../../components/Hero/index.jsx';

describe('<Hero/>', () => {
  const wrapper = mount(<Hero/>);

  it('is rendering the Hero?', () => {
    expect(wrapper.exists()).toBe(true);
  })

  it('is rendering the skeleton?', () => {
    expect(wrapper.find('HeroSkeleton').length).toBe(1);
  })

  // it('is rendering the structure?', () => {
  //   expect(wrapper.find('HeroStructure').length).toBe(1);
  // })

  it('matches the snap shot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})
