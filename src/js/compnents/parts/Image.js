import React, { Component, PropTypes } from 'react';

const Image = (props) => {
  const src = require(`img/${props.src}`);
  const { width, height, alt } = props;

  return(
    <img src = { src }
         width = { width }
         height = { height }
         alt = { alt || '' } />
  );
};

Image.propTypes = {
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string,
};

export default Image;
