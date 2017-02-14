import React, {Component} from 'react';

class ServiceItem extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    active: false
  }
  handleClick = () => {
    let active = !this.state.active;
    this.setState({ active });
    this.props.addTotal( active ? this.props.price : -this.props.price );
  }
  render() {
    return (
      <p className={ this.state.active ? 'active' : '' } onClick={this.handleClick}>
        {this.props.name} <b>${this.props.price.toFixed(2)}</b>
      </p>
    );
  }
}

export default ServiceItem;