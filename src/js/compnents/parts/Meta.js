import React, { Component, PropTypes } from 'react';
import DocumentMeta from 'react-document-meta';

function getMeta(path) {
  switch (path) {
    case '/books':
      return {
        title: 'Books',
        description: 'Books description',
      };
    default:
      return {
        title: 'React SPA Boilerplate',
        description: 'Home description',
      };
  }
}

export default class Meta extends Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = getMeta(props.path);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(getMeta(nextProps.path));
  }

  render() {
    return <DocumentMeta { ...this.state } />;
  }
}
