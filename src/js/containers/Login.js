import React, { Component, PropTypes } from 'react';
import { hashHistory } from 'react-router';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { keysToCamelCase } from '__util';
import auth from '../auth';

const styles = {
  padding: '20px',
  margin: '20px',
};

export default class Login extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { userId, userPassword } = keysToCamelCase(event.target, [
      'user_id', 'user_password',
    ]);

    if (!userId || !userPassword) {
      return;
    }

    const { location } = this.props;

    auth.setToken();

    if (location.sate && location.state.nextPath) {
      hashHistory.replace(location.state.nextPath);
    } else {
      hashHistory.replace('/');
    }
  }

  render() {
    return (
      <Paper style={styles}>
        <form onSubmit={this.handleSubmit}>
          <div><TextField name="user_id" /></div>
          <div><TextField name="user_password" /></div>
          <RaisedButton type="submit">送信する</RaisedButton>
        </form>
      </Paper>
    );
  }
}
