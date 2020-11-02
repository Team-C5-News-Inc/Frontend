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
// import toJson
import toJson from 'enzyme-to-json';

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

  it('Has two children?', () => {
    expect(wrapper.find('.masonry').children().length).toBe(2);
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

  it('Is there a MasonryResponsive component?', () => {
    expect(wrapper.find('MasonryResponsive').prop('columnsCountBreakPoints')).toStrictEqual({ '1000': 3, '480': 1, '700': 2 });
  });

  it('Is there a link component?', () => {
    expect(wrapper.find('Link').exists()).toBe(true);
  });

  it('Is there a container for lazy loading button?', () => {
    expect(wrapper.find('.masonry__loading').exists()).toBe(true);
  });

  it('Is there a button?', () => {
    expect(wrapper.find('button').exists()).toBe(true);
  });

  it('Is there a button?', () => {
    wrapper.find('button').simulate('click')

    expect(wrapper.find('button').prop('className')).toBe('masonry__loading--button 2');
  });

  it('Is there a button for lazy loading?', () => {
    expect(wrapper.find('.masonry__loading--button').exists()).toBe(true);
  });

  it('matches the snap shot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
