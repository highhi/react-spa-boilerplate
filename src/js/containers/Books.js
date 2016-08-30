import React from 'react';
import { hashHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import Image from 'components/parts/Image';

const Books = () =>
  <div>
    <Image
      src={'book.jpg'}
      width={516}
      height={600}
      alt="JavaScript 第6版"
    />
    <br />
    <RaisedButton onTouchTap={() => { hashHistory.goBack(); }}>
      戻る
    </RaisedButton>
  </div>;

export default Books;
