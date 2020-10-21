// import react
import React from 'react';
// import shallow
import { shallow } from 'enzyme';
//import card component
import Card from '../../components/Card';

describe('<Card/>', () => {
  const wrapper = shallow(<Card/>);

  it('Render the card component', () => {
    expect(wrapper.exists()).toBe(true);
  })

  it('Is there a class card component?', () => {
    expect(wrapper.find('.card').exists()).toBe(true);
  })

  it('Only one child?', () => {
    expect(wrapper.find('.card').children().length).toBe(1);
  })

  it('Is there an url element?', () => {
    expect(wrapper.find('a').exists()).toBe(true);
  })

  it('Is there an url prop?', () => {
    const url = '';
    expect(wrapper.find('.card__content').containsMatchingElement(<a href={url}/>));
  })
})
