import React, { Component, PropTypes } from 'react';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Layout from 'modules/Layout';
import Meta from 'parts/Meta';

export default class App extends Component {
  getChildContext() {
    return {
      muiTheme: getMuiTheme(baseTheme),
    };
  }

  render() {
    return (
      <div>
        <Meta path = { this.props.location.pathname } />
        <Layout>{ this.props.children }</Layout>
      </div>
    );
  }
}

App.childContextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

App.propTypes = {
  children: PropTypes.object.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};
