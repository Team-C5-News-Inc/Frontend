import React from 'react';
// import shallow
import { mount } from 'enzyme';
// import toJson
import toJson from 'enzyme-to-json';
// import app component
import Policy from '../../pages/Policy/index.jsx';

describe('<Policy />', () => {
  const wrapper = mount(<Policy />);

  it('is render the Error?', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('is a container class?', () => {
    expect(wrapper.find('.text').exists()).toBe(true);
  });

  it('are there correct the title?', () => {
    expect(wrapper.find('h1').text()).toBe('privacy policy of news inc');
  });

  it('are have two child?', () => {
    expect(wrapper.children().length).toBe(1);
  });

  it('matches the snap shot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
