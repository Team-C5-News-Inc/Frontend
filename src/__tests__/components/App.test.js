// import react
import React from 'react';
// import shallow
import { shallow } from 'enzyme';
// import app component
import App from '../../components/App';
// import toJson
//import toJson from 'enzyme-to-json';

describe('<App />', () => {
  const wrapper = shallow(<App />);

  it('is render the app?', () => {
    expect(wrapper.exists()).toBe(true)
  });

  it('are there home page?', () => {
    expect(wrapper.find('Home').exists()).toBe(true)
  });
});
