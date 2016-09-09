import React, { PropTypes, Component } from 'react';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default function hocMaterialTheme(WrappedComponent) {
  return class HocMaterialTheme extends Component {
    static childContextTypes = {
      muiTheme: PropTypes.object.isRequired,
    }

    getChildContext() {
      return {
        muiTheme: getMuiTheme(baseTheme),
      };
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
