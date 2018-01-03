import 'rc-time-picker-date-fns/assets/index.less';

import React from 'react';
import ReactDom from 'react-dom';
import moment from 'moment';
import TimePicker from 'rc-time-picker-date-fns';

ReactDom.render(
  <TimePicker defaultValue={moment()} showSecond={false} minuteStep={15} />
, document.getElementById('__react-content'));
