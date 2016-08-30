import React, { PropTypes } from 'react';
import { getImagePath } from 'util';

const Image = (props) => {
  const src = getImagePath(props.src);
  const { width, height, alt } = props;

  return (
    <img
      src={src}
      width={width}
      height={height}
      alt={alt || ''}
    />
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string,
};

export default Image;
