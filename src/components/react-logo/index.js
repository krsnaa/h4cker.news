import React, { Component } from 'react';

import logo from './logo.svg';
import styles from './react-logo.module.css';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <header className={styles['App-header']}>
          <img src={logo} className={styles['App-logo']} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>          
        </header>
      </div>
    );
  }
}

export default App;
