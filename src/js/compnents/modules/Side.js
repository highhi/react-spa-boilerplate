import React, { Component, PropTypes } from 'react';
import { hashHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class Side extends Component {
  constructor(props) {
    super(props);
    this.state = { open: true };
  }

  render() {
    return (
      <div>
        <Drawer open = { this.state.open }>
          <MenuItem onTouchTap = { (event) => {
            hashHistory.push('/');
          }}>TOP</MenuItem>
          <MenuItem onTouchTap = { (event) => {
            hashHistory.push('/books');
          }}>BOOK</MenuItem>
        </Drawer>
      </div>
    );
  }
}
