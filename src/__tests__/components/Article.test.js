// import react
import React from 'react';
// import shallow
import { shallow } from 'enzyme';
// import toJson
import toJson from 'enzyme-to-json';
// import app component
import Article from '../../pages/Article';

describe('<Hero type=small/>', () => {
  const wrapper = shallow(
    <Article
      type="small"
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
