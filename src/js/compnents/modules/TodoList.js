import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import * as todoActions from 'actions/todos';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <ul>
          { this.props.children }
        </ul>
      </div>
    );
  }
}
