// import react
import React from 'react';
// import shallow
import { mount } from 'enzyme';
//import card component
import CardStructure from '../../components/Card/CardStructure';

describe('<CardStructure/>', () => {
  const wrapper = mount(<CardStructure/>);

  it('Renders the card component', () => {
    expect(wrapper.exists()).toBe(true);
  })

  it('Is there a class card component?', () => {
    expect(wrapper.find('.card').exists()).toBe(true);
  })

  it('Only one child?', () => {
    expect(wrapper.find('.card').children().length).toBe(1);
  })

  it('Is there an image element?', () => {
    expect(wrapper.find('img').exists()).toBe(true);
  })

  it('Is there an url prop?', () => {
    const url = '';
    expect(wrapper.find('.card__content').containsMatchingElement(<a href={url}/>));
  })
})
