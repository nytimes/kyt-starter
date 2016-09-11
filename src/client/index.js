
// Demo client index.js file
// kyt expects every app to have this entry point.

import React from 'react';
import { render } from 'react-dom';
import App from './../components/App';
import { AppContainer } from 'react-hot-loader';

const root = document.querySelector('#root');

const mount = (RootComponent) => render(
  <AppContainer>
    <RootComponent />
  </AppContainer>,
  root
);

 module.hot.accept('./../components/App', () => {
  const RootComponent = require('./../components/App').default;
  mount(RootComponent);
});

mount(App);
