import React, { PropTypes } from 'react';
import DatePicker from 'material-ui/DatePicker';
import areIntlLocalesSupported from 'intl-locales-supported';

const dateTimeFormat = areIntlLocalesSupported(['ja']) ? Intl.DateTimeFormat : (() => {
  /* eslint-disable global-require */
  const IntlPolyfill = require('intl').DateTimeFormat;
  require('intl/locale-data/jsonp/ja');
  /* eslint-enable global-require */

  return IntlPolyfill;
})();

const Calender = (props) =>
  <DatePicker
    hintText="日付"
    name={props.name}
    DateTimeFormat={dateTimeFormat}
    locale="ja"
  />;

Calender.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Calender;
