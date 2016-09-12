import React, { Component } from 'react';
import styles from './styles.js';

class Main extends Component {
  render() {
    return(
    <div>
    <h1 className="jumbotron text-center" style={styles.transparentBg}>Make Slogans Great Again</h1>
    {this.props.children}
    </div>
  );
  }
}

module.exports = Main;
