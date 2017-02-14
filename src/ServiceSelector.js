import React, {Component} from 'react';
import ServiceItem from './ServiceItem'
import './ServiceSelector.css';

class ServiceSelector extends Component {
  constructor(props) {
      super(props);
  }
  state = {
    total: 0
  }
  render() {
    return (
      <div className='ServiceSelector'>
        <h3>Order Form</h3>
        <div className='Service-list'> </div>
        <div className='Service-total'>
          <div id="total">Total <b>${this.state.total.toFixed(2)}</b></div>
        </div>
      </div>
    );
  }
}

export default ServiceSelector;