import React from 'react';
import './Calculator.css';
import Buttons from "./Buttons";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calculatorState: 0,
      viewValue: [],
      results: '',
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
    this.comparison = this.comparison.bind(this);
  }
  comparison(arry, value) {
    return arry.find((item) => item === value)    
  }

  takeValue(value){
    const tempArray = this.state.viewValue;
    const arrayOfDec = ['+','*','/',')','%','(','-', '.', '=']
    if(tempArray.length === 0 && this.comparison(['clr','+','*','/',')','%'], value)){
      return;
    }else{
      if(value === 'clr'){
        this.setState({
          viewValue: []
        })
      }else{
        if((tempArray[tempArray.length-1] === value || this.comparison(arrayOfDec,tempArray[tempArray.length-1])) && this.comparison(arrayOfDec, value)){
          return;
        }
        this.setState({
          viewValue: [...tempArray, value]
        })
      }
   }

    
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
        <span className='title'>Calculator</span> 
        <span className='results'>{this.state.results}</span> 
        <div className="displayView"><h4>{this.state.viewValue}</h4></div>
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
