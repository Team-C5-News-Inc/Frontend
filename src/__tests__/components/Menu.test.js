// import react
import React from 'react';
// import shallow
import { mount } from 'enzyme';
// import router
import { HashRouter as Router } from 'react-router-dom';
// import context provider
import { ContextProvider } from '../../utils/Context/index.jsx';
// import toJson
import toJson from 'enzyme-to-json';
// import app component
import Menu from '../../components/Menu/index.jsx';

describe('<Menu />', () => {
  const wrapper = mount(
    <ContextProvider>
      <Router>
        <Menu />
      </Router>
    </ContextProvider>,
  );

  it('is rendering the Menu?', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('is there an i element?', () => {
    expect(wrapper.find('i').exists()).toBe(true);
  });

  it('is there a class named slide right?', () => {
    expect(wrapper.find('div').props().className).toBe('menu slide-right');
  });

  it('is there a class named slide left?', () => {

    wrapper.find('i').simulate('click');

    expect(wrapper.find('div').props().className).toBe('menu slide-left');
  });

  it('matches the snap shot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
