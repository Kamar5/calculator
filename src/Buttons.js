import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function Buttons(props){
    function handleClick() {
      props.takeValue(props.values)
    }
    return (<Button bsStyle={props.bsStyle} onClick={handleClick}>{props.values}</Button>);
}

Buttons.propTypes = {
  takeValue: PropTypes.func,
  values: PropTypes.string,
  bsStyle: PropTypes.string
};
