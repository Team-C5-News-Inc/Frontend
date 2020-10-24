// import react
import React from 'react';
// import shallow
import { mount } from 'enzyme';
//import card component
import Grid from '../../components/Grid';
// import router
import { HashRouter as Router } from 'react-router-dom' 
// import context provider
import { ContextProvider } from '../../utils/Context/index.jsx';

describe('<Grid/>', () => {
  const wrapper = mount(
    <ContextProvider>
      <Router>
        <Grid />
      </Router> 
    </ContextProvider>,
  );

  it('Render the Grid component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('Is there a class masonry component?', () => {
    expect(wrapper.find('.masonry').exists()).toBe(true);
  });

  it('Only one child?', () => {
    expect(wrapper.find('.masonry').children().length).toBe(1);
  });

  it('Is there a ResponsiveMasonry element?', () => {
    expect(wrapper.find('ResponsiveMasonry').exists());
  });

  it('Is there a masonry-layout element?', () => {
    expect(wrapper.find('Masonry').exists()).toBe(true);
  });

  it('Is there a context provider?', () => {
    expect(wrapper.find('ContextProvider').exists()).toBe(true);
  });
});
