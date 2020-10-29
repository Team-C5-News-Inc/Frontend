// import react
import React from 'react';
// import shallow
import { shallow } from 'enzyme';
// import toJson
import toJson from 'enzyme-to-json';
// import app component
import Card from '../../components/Card/index.jsx';

describe('<Card/>', () => {
  const wrapper = shallow(<Card/>);

  it('is rendering the Card?', () => {
    expect(wrapper.exists()).toBe(true);
  })

  it('is rendering the skeleton? ', () => {
    expect(wrapper.find('CardSkeleton').length).toBe(1);
  })

  it('matches the snap shot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
})
