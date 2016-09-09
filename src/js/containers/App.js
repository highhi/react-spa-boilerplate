import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchAuth } from '__actions/auth';
import Layout from '__components/modules/Layout';
import Meta from '__components/parts/Meta';

class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    dispatch: PropTypes.func.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }),
  }

  componentWillMount() {
    this.props.dispatch(fetchAuth());
  }

  render() {
    return (
      <div>
        <Meta path={this.props.location.pathname} />
        <Layout>{ this.props.children }</Layout>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { auth } = state;
  return {
    auth,
  };
}

export default connect(mapStateToProps)(App);
