// import react
import React from 'react';
// import shallow
import { shallow } from 'enzyme';
// import toJson
import toJson from 'enzyme-to-json';
// import app component
import Footer from '../../components/Footer/index.jsx';

describe('<Footer />', () => {
  const wrapper = shallow(<Footer />);

  it('is render the Footer?', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('matches the snap shot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
