import React from 'react';
// import shallow
import { shallow } from 'enzyme';
// import app component
import Team from '../../pages/Team/index.jsx';

describe('<Team />', () => {
  const wrapper = shallow(<Team />);

  it('is render the team page?', () => {
    expect(wrapper.exists()).toBe(true)
  });
});
