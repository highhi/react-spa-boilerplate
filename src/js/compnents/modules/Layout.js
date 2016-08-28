import React, { PropTypes } from 'react';
import Header from './Header';
import Side from './Side';
import Main from './Main';

const Layout = (props) =>
  <div>
    <Header />
    <Side />
    <Main>
      { props.children }
    </Main>
  </div>;

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
