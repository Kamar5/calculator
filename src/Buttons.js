import React from 'react';
import { Button } from 'react-bootstrap';



function Buttons(props){
    function handleClick() {
      props.takeValue(props.values)
    }
    return (<Button bsStyle={props.bsStyle} onClick={handleClick}>{props.values}</Button>);
}

export default Buttons;
