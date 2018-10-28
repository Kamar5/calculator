import React from 'react';
import Calculator from './Calculator';
import { shallow } from 'enzyme';

it('should have the calculator as title', () => {
  const wrapper = shallow(<Calculator />);
  expect(wrapper.find('.title').text()).toEqual('Calculator');
});