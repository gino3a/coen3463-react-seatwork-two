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
  addTotal = (price) => {
    this.setState( { total: this.state.total + price } );
  }
  render() {
    const self = this;
    let services = this.props.items.map(function(s){
      return <ServiceItem
              name={s.name}
              price={s.price}
              active={s.active}
              addTotal={self.addTotal}
            />;
    });

    return (
      <div className='ServiceSelector'>
        <h3>Order Form</h3>

        {services}
        <div>
          <p id="total">Total <b>${this.state.total.toFixed(2)}</b></p>
        </div>
      </div>
    );
  }
}

export default ServiceSelector;