import React, { Component } from 'react';
import { cooperCalculator } from './CooperCalculator';

class DisplayCooperResult extends Component {

  calculate() {
    return cooperCalculator(this.props.distance, this.props.gender, this.props.age);
  }

  render() {
    let results
    if (this.props.age !== '' && this.props.distance !== '') {
      results =
        <div>
          <p>{this.props.age} y/o {this.props.gender} running {this.props.distance} meters.</p> 
          <p>Result: {this.calculate()}</p>
        </div>
    }
    return (
      <div>
        {results}
      </div>
    )
  }
}

export default DisplayCooperResult