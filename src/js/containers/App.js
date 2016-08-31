import React, { Component, PropTypes } from 'react';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Layout from 'components/modules/Layout';
import Meta from 'components/parts/Meta';
import { getPrefixStyles } from 'util';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }),
  }

  static childContextTypes = {
    muiTheme: PropTypes.object.isRequired,
  }

  getChildContext() {
    return {
      muiTheme: getMuiTheme(baseTheme),
    };
  }

  render() {
    const styles = getPrefixStyles({
      flex: 1,
    });
    return (
      <div style={styles}>
        <Meta path={this.props.location.pathname} />
        <Layout>{ this.props.children }</Layout>
      </div>
    );
  }
}
