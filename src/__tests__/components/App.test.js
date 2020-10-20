// import react
import React from 'react';
// import shallow
import { shallow } from 'enzyme';
// import app component
import App from '../../components/App/index.jsx';

describe('<App />', () => {
  const wrapper = shallow(<App />);

  it('is render the app?', () => {
    expect(wrapper.exists()).toBe(true)
  });

  it('are there home page?', () => {
    expect(wrapper.find('Home').exists()).toBe(true)
  });

  it('is there switch component?', () => {
    expect(wrapper.find('Switch').exists()).toBe(true)
  });

  it('is there router component?', () => {
    expect(wrapper.find('HashRouter').exists()).toBeTruthy()
  })

  it('are switch has one child?', () => {
    expect(wrapper.find('Switch').children().length).toBe(1)
  })
});
