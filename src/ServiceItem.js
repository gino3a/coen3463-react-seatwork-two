import React, {Component} from 'react';

class ServiceItem extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    active: false
  }
  render() {
    return (
      <p>
        {this.props.name} <b>${this.props.price.toFixed(2)}</b>
      </p>
    );
  }
}

export default ServiceItem;