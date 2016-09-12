
// This testing environment uses:
// ava : https://github.com/avajs/ava
// enzyme: https://github.com/airbnb/enzyme

import React from 'react';
import { shallow } from 'enzyme';
import App from './index.js';
import HelloWorld from '../HelloWorld';

it('Tests that the App renders.', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<HelloWorld />)).toBeTruthy();
});
