
// This component is built with:
// React: https://facebook.github.io/react/

import React from 'react';
import styles from './HelloWorld.css';

function HelloWorld() {
  return (
    <div className={styles.hello}>
      <h1>Welcome to the simple React starter-kyt!</h1>
      <i className={styles.logo} />
      <h2> This starter-kyt includes:</h2>
      <ul className={styles.list}>
        <li>React</li>
        <li>Express</li>
        <li>Enzyme</li>
      </ul>
    </div>
  );
}

export default HelloWorld;
