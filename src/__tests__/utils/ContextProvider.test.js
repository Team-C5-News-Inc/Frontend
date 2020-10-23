// import react
import React from 'react';
// import shallow
import { shallow } from 'enzyme';
// import app component
import { ContextProvider } from '../../utils/Context/index.jsx';

describe('<ContextProvider />', () => {
  const wrapper = shallow(<ContextProvider />);

  it('is render the ContextProvider?', () => {
    expect(wrapper.exists()).toBe(true)
  });

});
