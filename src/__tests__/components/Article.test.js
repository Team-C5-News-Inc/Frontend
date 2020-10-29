// import react
import React from 'react';
// import shallow
import { mount } from 'enzyme';
// import toJson
import toJson from 'enzyme-to-json';
// import context
import { ContextProvider } from '../../utils/Context/index.jsx';
// import app component
import Article from '../../pages/Article/index.jsx';

describe('<Article/>', () => {
  const wrapper = mount(
    <ContextProvider>
      <Article />
    </ContextProvider>,
  );

  it('is rendering the Article?', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('is rendering the skeleton?', () => {
    expect(wrapper.find('ArticleSkeleton').exists()).toBe(true);
  });

  it('matches the snap shot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
