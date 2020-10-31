// import react
import React from 'react';
// import shallow
import { mount } from 'enzyme';
// import toJson
import toJson from 'enzyme-to-json';
// import context provider
import { ContextProvider } from '../../utils/Context/index.jsx';
// import app component
import Search from '../../components/Search/index.jsx';

describe('<Search />', () => {
  const wrapper = mount(
    <ContextProvider>
      <Search />
    </ContextProvider>,
  );

  it('is the Search rendering?', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('is there a searchformOff class?', () => {
    expect(wrapper.find('.searchformOff').exists()).toBe(true);
  });

  it('is there a class named off off?', () => {
    expect(wrapper.find('.searchformOff').props().className).toBe('searchformOff off');
  });

  it('is there a class named slide left?', () => {
    wrapper.find('.search').simulate('click')

    expect(wrapper.find('.searchformOff').props().className).toBe('searchformOff slide_search-left searchform');
  });

  it('is there a class named slide left?', () => {
    wrapper.find('.search').simulate('click')

    expect(wrapper.find('.searchformOff').props().className).toBe('searchformOff off');
  });

  it('is there search value?', () => {
    const event = { target: { name: 'search', value: 'random' } };

    wrapper.find('input').simulate('change', event);

    expect(wrapper.find('input').prop('value')).toBe('random');
  });

  it('matches the snap shot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
