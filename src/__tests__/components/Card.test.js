// import react
import React from 'react';
// import shallow
import { shallow, mount } from 'enzyme';
// import toJson
import toJson from 'enzyme-to-json';
// import context
import { ContextProvider } from '../../utils/Context/index.jsx';
// import app component
import Card from '../../components/Card/index.jsx';

describe('<Card/> mount', () => {
  const wrapper = mount(
    <ContextProvider>
      <Card images="images" title="title" />
    </ContextProvider>,
  );

  it('is rendering the Card?', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('is rendering the skeleton?', () => {
    expect(wrapper.find('CardSkeleton').length).toBe(1);
  });

  it('is rendering the skeleton?', () => {
    expect(wrapper.find('loading').exists()).toBe(false);
  });

  it('matches the snap shot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
