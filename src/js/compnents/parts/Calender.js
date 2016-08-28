import React, { Component, PropTypes } from 'react';
import DatePicker from 'material-ui/DatePicker';
import areIntlLocalesSupported from 'intl-locales-supported';

const dateTimeFormat = areIntlLocalesSupported(['ja']) ? Intl.DateTimeFormat : (() => {
  const IntlPolyfill = require('intl').DateTimeFormat;
  require('intl/locale-data/jsonp/ja');
  return IntlPolyfill;
})();

const Calender = (props) => {
  return(
    <DatePicker hintText = '日付'
                name = { props.name }
                DateTimeFormat = { dateTimeFormat }
                locale = 'ja' />
  );
};

Calender.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Calender;
