import React, { Component } from 'react';
import { hashHistory } from 'react-router';
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
          <MenuItem onTouchTap = { () => hashHistory.push('/') }>TOP</MenuItem>
          <MenuItem onTouchTap = { () => hashHistory.push('/books') }>BOOK</MenuItem>
        </Drawer>
      </div>
    );
  }
}
