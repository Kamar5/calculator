import React from 'react';
import Buttons from './Buttons';
import { shallow } from 'enzyme';
import { Button } from 'react-bootstrap';


describe('Button', () => {
  it('should have button', () => {
    const wrapper = shallow(<Buttons bsStyle='info' value='clr' takeValue={jest.fn()} />);
    expect(wrapper.find(Button).length).toBe(1);
  });
});