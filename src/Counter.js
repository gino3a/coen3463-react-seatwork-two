import React, {Component} from 'react';

class Counter extends Component {
  state = {
    count: 0
  }
  render() {
    return (
      <div className="counter">
        <h1>Counter: {this.state.count}</h1>
      </div>
    )
  }
}
export default Counter;
