// import react
import React from 'react';
// import shallow
import { mount } from 'enzyme';
// import toJson
import toJson from 'enzyme-to-json';
// import app component
// import router
import { HashRouter as Router } from 'react-router-dom';
// import context provider
import { ContextProvider } from '../../utils/Context/index.jsx';
// import Tag component
import Tag from '../../components/Tags/index.jsx';

describe('<Tags />', () => {
  const wrapper = mount(
    <ContextProvider>
      <Router>
        <Tag />
      </Router>
    </ContextProvider>,
  );

  it('is the Search rendering?', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('is there a searchformOff class?', () => {
    expect(wrapper.find('.tag').exists()).toBe(true);
  });

  it('matches the snap shot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
