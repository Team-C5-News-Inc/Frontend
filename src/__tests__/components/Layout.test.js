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

  it('is render the Layout?', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('are there footer component?', () => {
    expect(wrapper.find('Footer').exists()).toBe(true);
  });

  it('are there header component?', () => {
    expect(wrapper.find('Header').exists()).toBe(true);
  });

});
