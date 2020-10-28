// import react
import React from 'react';
// import shallow
import { mount, shallow } from 'enzyme';
// import toJson
import toJson from 'enzyme-to-json';
// import app component
import HeroStructure from '../../components/Hero/HeroStructure/index.jsx';

describe('<HeroStructure type=small/>', () => {
  const wrapper = mount(<HeroStructure type="small" />);

  it('is rendering the Hero?', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('is there a container?', () => {
    expect(wrapper.find('.home__hero-container').exists()).toBe(true);
  });

  it('the container has two children?', () => {
    expect(wrapper.find('.home__hero-container').children().length).toBe(2);
  });

  it('should have a container?', () => {
    expect(wrapper.find('HeroStructure').exists()).toBe(true);
  });

  it('matches the snap shot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('<HeroStructure />', () => {
  const wrapper = shallow(<HeroStructure />);

  it('is default type working?', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
