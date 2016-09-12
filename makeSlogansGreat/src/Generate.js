import React, { Component } from 'react';
import './App.css';

class Generate extends Component {
  submitQuery(evt){
    evt.preventDefault();
    var clicks = ["Make clicking great again!", "I am the best most luxurious clicker you've ever seen.", "If Ivanka weren't my daughter perhaps we'd be clicking", "I will be the greatest clicking president that God ever created", "I have the best clicks"]
    console.log(clicks[Math.floor(Math.random()*clicks.length)]);
  }
  render(){
    return(
      <div>
        <form onSubmit={(evt) => this.submitQuery(evt)}>
          <button type="submit" className="trumpton center-block"> Make Slogans Great!</button>
        </form>
      </div>
    )
  }
}

module.exports = Generate;
