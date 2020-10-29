// import react
import React from 'react';
// import shallow
import { mount } from 'enzyme';
// import toJson
import toJson from 'enzyme-to-json';
// import context
import { ContextProvider } from '../../utils/Context/index.jsx';
// import app component
import Hero from '../../components/Hero/index.jsx';

describe('<Hero/>', () => {
  const wrapper = mount(
    <ContextProvider>
      <Hero />
    </ContextProvider>,
  );

  it('is rendering the Hero?', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('is rendering the skeleton?', () => {
    expect(wrapper.find('HeroSkeleton').length).toBe(1);
  });

  it('matches the snap shot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
