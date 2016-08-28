import React, { PropTypes, Component } from 'react';
import Header from './Header';
import Side from './Side';
import Main from './Main';

export default class Layout extends Component {
  render() {
    return(
      <div>
        <Header />
        <Side />
        <Main>
          { this.props.children }
        </Main>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
