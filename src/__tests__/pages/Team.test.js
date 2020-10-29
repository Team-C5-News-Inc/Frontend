import React from 'react';
// import shallow
import { mount } from 'enzyme';
// import toJson
import toJson from 'enzyme-to-json';
// import app component
import Team from '../../pages/Team/index.jsx';
// import context
import { ContextProvider } from '../../utils/Context/index.jsx';

describe('<Team />', () => {
  const wrapper = mount(
    <ContextProvider>
      <Team />
    </ContextProvider>,
  );

  it('is render the team page?', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('are there team grid class?', () => {
    expect(wrapper.find('.team__grid').exists()).toBe(true);
  });

  it('are there ResponsiveMasonry?', () => {
    expect(wrapper.find('MasonryResponsive').exists()).toBe(true);
  });

  it('are there Masonry?', () => {
    expect(wrapper.find('Masonry').exists()).toBe(true);
  });

  it('matches the snap shot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
