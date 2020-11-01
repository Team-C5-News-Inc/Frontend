// import react
import React from 'react';
// import shallow
import { shallow } from 'enzyme';
// import app component
import App from '../../components/App/index.jsx';
// import toJson
import toJson from 'enzyme-to-json';

describe('<App />', () => {
  const wrapper = shallow(<App />);

  it('is the app rendering?', () => {
    expect(wrapper.exists()).toBe(true)
  });

  it('is there a home page?', () => {
    expect(wrapper.find('Home').exists()).toBe(true)
  });

  it('is there a switch component?', () => {
    expect(wrapper.find('Switch').exists()).toBe(true)
  });

  it('is there a router component?', () => {
    expect(wrapper.find('HashRouter').exists()).toBeTruthy()
  })

  it('are switch has six children?', () => {
    expect(wrapper.find('Switch').children().length).toBe(6)
  })

  it('matches the snap shot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
