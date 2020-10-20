import React from 'react';
// import shallow
import { shallow } from 'enzyme';
// import app component
import Home from '../../pages/Home/index.jsx';

describe('<Home />', () => {
  const wrapper = shallow(<Home />);

  it('is render the home?', () => {
    expect(wrapper.exists()).toBe(true)
  });
});
