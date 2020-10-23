// import react
import React from 'react';
// import shallow
import { shallow } from 'enzyme';
// import toJson
import toJson from 'enzyme-to-json';
// import app component
import Article from '../../pages/Article';

describe('<Article ...props/>', () => {
  const wrapper = shallow(
    <Article
      title="title"
      subtitle="subtitle"
      author="Juan"
      date="00/00/00"
      image="random"
      text="lorem"
    />,
  );

  it('is render the Article?', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('is render the title, subtitle, author and date properties?', () => {
    expect(wrapper.find('.content__headline').text()).toEqual('titlesubtitleJuan - 00/00/00')
  });

  it('is render the src?', () => {
    expect(wrapper.find('.content__image').first().props().src).toBe('random');
  });

  it('matches the snap shot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('<Hero />', () => {
  const wrapper = shallow(<Article />);

  it('are default type works?', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
