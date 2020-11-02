import React from 'react';
// import shallow
import { mount } from 'enzyme';
// import context
import { ContextProvider } from '../../utils/Context/index.jsx';
// import context
import { HashRouter } from 'react-router-dom';
// import toJson
import toJson from 'enzyme-to-json';
// import Article component
import Article from '../../pages/Article/index.jsx';

describe('<Article />', () => {
  const wrapper = mount(
    <ContextProvider>
      <HashRouter>
        <Article />
      </HashRouter>
    </ContextProvider>,
  );

  it('is render the Article page?', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('is there a post Container class?', () => {
    expect(wrapper.find('.postContainer').exists()).toBe(false);
  });

  it('matches the snap shot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
