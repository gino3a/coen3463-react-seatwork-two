import React, { Component } from 'react';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let completed = this.props.grocery.completed ? "completed" : '';
    return (
      <li className={completed} onClick={this.props.onComplete}>
        <input type='checkbox' checked={this.props.grocery.completed}/>
        {this.props.grocery.name}
      </li>
    );
  }
}

export default TodoItem;