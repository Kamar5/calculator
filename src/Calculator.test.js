import React from 'react';
import Calculator from './Calculator';
import { shallow } from 'enzyme';

it('should have the calculator as title', () => {
  const wrapper = shallow(<Calculator />);
  expect(wrapper.find('.title').text()).toBe('Calculator');
});

it('should update state when takeValue function run', () => {
  const wrapper = shallow(<Calculator />);
  wrapper.instance().takeValue('6');
  expect(wrapper.state().viewValue.length).toBe(1);
  expect(wrapper.state().viewValue[0]).toBe('6');
});

it('should clear out the view the clr button clicked', () => {
  const wrapper = shallow(<Calculator />);
  wrapper.instance().takeValue('5');
  wrapper.instance().takeValue('clr');
  expect(wrapper.state().viewValue.length).toBe(0);
});

it('should not add to the view +,*,/,),% / if the view is empty', () => {
  const wrapper = shallow(<Calculator />);
  wrapper.instance().takeValue('+');
  wrapper.instance().takeValue('*');
  wrapper.instance().takeValue('/');
  wrapper.instance().takeValue(')');
  wrapper.instance().takeValue('%');
  expect(wrapper.state().viewValue.length).toBe(0);
});

it('should add, multiply, divide if the view already have', () => {
  const wrapper = shallow(<Calculator />);
  wrapper.instance().takeValue('5');
  wrapper.instance().takeValue('+');
  wrapper.instance().takeValue('+');
  wrapper.instance().takeValue('*');
  expect(wrapper.state().viewValue.length).toBe(2);
});