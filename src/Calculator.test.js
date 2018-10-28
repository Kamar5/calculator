import React from 'react';
import Calculator from './Calculator';
import { shallow } from 'enzyme';

it('should have the calculator as title', () => {
  const wrapper = shallow(<Calculator />);
  expect(wrapper.find('.title').text()).toEqual('Calculator');
});

it('should update state when takeValue function run', () => {
  const wrapper = shallow(<Calculator />);
  wrapper.instance().takeValue('6');
  expect(wrapper.state().arrayOfValues[0]).toEqual('6');
});