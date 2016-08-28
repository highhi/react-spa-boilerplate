import React, { PropTypes } from 'react';

const Main = (props) =>
  <main style = { { paddingLeft: '256px' } }>
    <div style = { { margin: '48px 72px' } }>
      { props.children }
    </div>
  </main>;

Main.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Main;
