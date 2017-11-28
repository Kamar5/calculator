import React, {Component} from 'react';
import Buttons from "./Buttons";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calculatorState: 0,
      arrayOfValues: []
    };
    this.takeValue = this.takeValue.bind(this);
  }

  takeValue(value){
    this.setState({
      arrayOfValues: [...this.state.arrayOfValues, value]
    })
  }
  render() {
    return (
      <div className="Calculator">
        <div className="displayView"><h4>{this.state.arrayOfValues}</h4></div>
        <div className="row">
            <div className="leftSide">
              <Buttons takeValue={this.takeValue} values="1" />
              <Buttons takeValue={this.takeValue} values="2" />
              <Buttons takeValue={this.takeValue} values="3" />
              <Buttons takeValue={this.takeValue} values="4" />
              <Buttons takeValue={this.takeValue} values="5" />
              <Buttons takeValue={this.takeValue} values="6" />
              <Buttons takeValue={this.takeValue} values="7" />
              <Buttons takeValue={this.takeValue} values="8" />
              <Buttons takeValue={this.takeValue} values="9" />
              <Buttons takeValue={this.takeValue} values="0" />
              <Buttons takeValue={this.takeValue} values="." />
              <Buttons bsStyle="success" takeValue={this.takeValue} values="=" />
            </div>
            <div className="rightSide">
              <Buttons bsStyle="info" takeValue={this.takeValue} values="(" />
              <Buttons bsStyle="info" takeValue={this.takeValue} values=")" />
              <Buttons bsStyle="info" takeValue={this.takeValue} values="+" />
              <Buttons bsStyle="info" takeValue={this.takeValue} values="-" />
              <Buttons bsStyle="info" takeValue={this.takeValue} values="*" />
              <Buttons bsStyle="info" takeValue={this.takeValue} values="/" />
              <Buttons bsStyle="danger" takeValue={this.takeValue} values="clr" />
              <Buttons bsStyle="info" takeValue={this.takeValue} values="%" />
            </div>

        </div>
      </div>
    );
  }
}

export default Calculator;
