import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Calculator from './Calculator';

it('should have the calculator component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Calculator).length).toBe(1);
})
