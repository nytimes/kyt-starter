
// This testing environment uses:
// ava : https://github.com/avajs/ava
// chai: http://chaijs.com/
// enzyme: https://github.com/airbnb/enzyme

import ava from 'ava';
import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import App from './index.js';
import HelloWorld from '../HelloWorld';

ava('Tests that true is true.', (test) => {
  const wrapper = shallow(<App />);
  test.pass(chai.assert.isTrue(wrapper.contains(<HelloWorld />)));
});
