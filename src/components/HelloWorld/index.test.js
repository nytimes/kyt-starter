
// This testing environment uses:
// ava : https://github.com/avajs/ava
// enzyme: https://github.com/airbnb/enzyme

import ava from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import HelloWorld from './index.js';

ava('Tests that true is true.', (test) => {
  const wrapper = shallow(<HelloWorld />);
  test.is(wrapper.text(), 'Hello World!');
});
