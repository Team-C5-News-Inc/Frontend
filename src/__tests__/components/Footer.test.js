// import react
import React from 'react';
// import shallow
import { shallow, mount } from 'enzyme';
// import router
import { HashRouter as Router } from 'react-router-dom';
// import toJson
import toJson from 'enzyme-to-json';
// import app component
import Footer from '../../components/Footer/index.jsx';

describe('<Footer />', () => {
  const wrapper = shallow(<Footer />);

  it('is the Footer rendering?', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('matches the snap shot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('<Footer /> mount', () => {
  const wrapper = mount(
    <Router>
      <Footer />
    </Router>,
  );

  it('is the Footer rendering?', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('is there a Footer social tag?', () => {
    expect(wrapper.find('.footer__social').children().length).toBe(3);
  });

  it('the Footer has the correct text?', () => {
    expect(wrapper.find('.footer__comments').text()).toBe(
      '2020 by Masters INC. Proudly created with React JS',
    );
  });

  it("the Footer's about has a link component?", () => {
    expect(wrapper.find('Link').first().prop('to')).toBe('/about');
  });

  it('should Footer link component has the correct route?', () => {
    expect(wrapper.find('Link').last().prop('to')).toBe('/Privacy_Policy');
  });
});
