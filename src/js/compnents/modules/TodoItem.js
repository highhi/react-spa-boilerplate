import React, { Component, PropTypes } from 'react';

export default class Todo extends Component {
  render() {
    const { id, text, date } = this.props.todo;

    return(
      <li data-todo-id={ id }>
        <span>{ text }</span>
        <span>{ date }</span>
      </li>
    );
  }
}
