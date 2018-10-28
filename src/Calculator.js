import React, {Component} from 'react';
import './Calculator.css';
import Buttons from "./Buttons";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calculatorState: 0,
      arrayOfValues: [],
      leftSideValues: [
        {value: '1'},
        {value: '2'},
        {value: '3'},
        {value: '4'},
        {value: '5'},
        {value: '6'},
        {value: '7'},
        {value: '8'},
        {value: '9'},
        {value: '0'},
        {value: '.'},
        {bsStyle: "success",value: '='}],
      rightSideValues: [
        {bsStyle: "info", value: '('},
        {bsStyle: "info", value: ')'},
        {bsStyle: "info", value: '+'},
        {bsStyle: "info", value: '-'},
        {bsStyle: "info", value: '*'},
        {bsStyle: "info", value: '/'},
        {bsStyle: "danger", value: 'clr'},
        {bsStyle: "info", value: '%'}]
    };

    this.takeValue = this.takeValue.bind(this);
  }

  takeValue(value){
    this.setState({
      arrayOfValues: [...this.state.arrayOfValues, value]
    })
  }
  renderLeftSideValues(){
    return this.state.leftSideValues.map((valueObject) => {
      return (
        <Buttons key={valueObject.value} bsStyle={valueObject.bsStyle} takeValue={this.takeValue} values={valueObject.value} />
      );
    })
  }

  renderRightSideValues(){
    return this.state.rightSideValues.map((valueObject) => {
      return (
        <Buttons key={valueObject.value} bsStyle={valueObject.bsStyle} takeValue={this.takeValue} values={valueObject.value} />
      );
    })
  }

  render() {
    return (
      <div className="Calculator">
        <div className='title'>Calculator</div> 
        <div className="displayView"><h4>{this.state.arrayOfValues}</h4></div>
        <div className="row">
            <div className="leftSide">
              {this.renderLeftSideValues()}
            </div>
            <div className="rightSide">
             {this.renderRightSideValues()}
            </div>

        </div>
      </div>
    );
  }
}

export default Calculator;
