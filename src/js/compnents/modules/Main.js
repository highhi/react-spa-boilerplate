import React, { Component, PropTypes } from 'react';

const styles = {
  paddingLeft: '256px'
};

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <main style={{ paddingLeft: '256px' }}>
        <div style={{ margin: '48px 72px' }}>
          { this.props.children }
        </div>
      </main>
    );
  }
}
