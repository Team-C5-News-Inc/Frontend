import React from 'react';
// import shallow
import { mount } from 'enzyme';
// import context
import { ContextProvider } from '../../utils/Context/index.jsx';
// import context
import { HashRouter } from 'react-router-dom';
// import app component
import Home from '../../pages/Home/index.jsx';

describe('<Home />', () => {
  const wrapper = mount(
    <ContextProvider>
      <HashRouter>
        <Home />
      </HashRouter>
    </ContextProvider>,
  );

  it('is render the home? ', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('are there one children?', () => {
    expect(wrapper.children().length).toBe(1);
  });

  it('are there a Link component?', () => {
    expect(wrapper.find('Link')).toBeTruthy()
  });

  it('are there a grid component?', () => {
    expect(wrapper.find('Grid')).toBeTruthy()
  });

});
