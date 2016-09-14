import React, { Component } from 'react';
import styles from './styles.js';

//Always have the same header regardless of routes and render child components
//I.e the home component or the GenerateContainer component
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
