import React, { Component } from 'react';

class Main extends Component {
  render() {
    console.log(this);
    return(
    <div>
    Jello from Main
    {this.props.children}
    </div>
  );
  }
}

module.exports = Main;
