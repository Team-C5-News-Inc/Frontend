// import react
import React from 'react';
// import shallow
import { shallow } from 'enzyme';
// import toJson
import toJson from 'enzyme-to-json';
// import app component
import Hero from '../../components/Hero/index.jsx';

describe('<Hero type=small/>', () => {
  const wrapper = shallow(<Hero type="small" />);

  it('is render the Hero?', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('are there a container?', () => {
    expect(wrapper.find('.home__hero-container').exists()).toBe(true);
  });

  it('are container have two children?', () => {
    expect(wrapper.find('.home__hero-container').children().length).toBe(2);
  });

  it('should have home hero class container?', () => {
    expect(wrapper.hasClass('home__hero-container')).toBe(true);
  });

  it('matches the snap shot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('<Hero />', () => {
  const wrapper = shallow(<Hero />);

  it('are default type works?', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
