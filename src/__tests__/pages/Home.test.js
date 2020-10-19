import React from 'react';
// import shallow
import { shallow } from 'enzyme';
// import app component
import Home from '../../pages/Home';
// import toJson
//import toJson from 'enzyme-to-json';

describe('<App />', () => {
  const wrapper = shallow(<Home />);

  it('is render the home?', () => {
    expect(wrapper.exists()).toBe(true)
  });
});
