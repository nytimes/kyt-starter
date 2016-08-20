
// Demo client index.js file
// kyt expects every app to have this entry point.

import React from 'react';
import { render } from 'react-dom';
import App from './../components/App';

const root = document.querySelector('#root');

const mount = () => render(<App />, root);

if (process.env.NODE_ENV === 'development' && module.hot) {
  // Rerender the app after any changes.
  module.hot.accept('./../components/App', mount);
}

mount();
