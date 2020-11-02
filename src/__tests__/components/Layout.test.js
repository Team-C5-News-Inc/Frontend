// import react
import React from 'react';
// import shallow
import { shallow } from 'enzyme';
// import toJson
import toJson from 'enzyme-to-json';
// import app component
import Layout from '../../components/Layout/index.jsx';

describe('<Layout />', () => {
  const wrapper = shallow(<Layout />);

  it('is the Layout rendering?', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('is there a footer component?', () => {
    expect(wrapper.find('Footer').exists()).toBe(true);
  });

  it('is there a header component?', () => {
    expect(wrapper.find('Header').exists()).toBe(true);
  });

  it('matches the snap shot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
