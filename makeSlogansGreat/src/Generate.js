import React, { Component } from 'react';
import './App.css';
import Results from './Results';

class Generate extends Component {
  constructor(props){
    super(props)
    this.state = {
      hasGenerated: false,
    }
  }
  submitNounQuery(evt){
    evt.preventDefault();
    console.log("Make nouns noun-ier");
  }
  submitSloganQuery(evt){
    evt.preventDefault();
    var clicks = ["Make clicking great again!", "I am the best most luxurious clicker you've ever seen.", "If Ivanka weren't my daughter perhaps we'd be clicking", "I will be the greatest clicking president that God ever created", "I have the best clicks"]
    console.log(clicks[Math.floor(Math.random()*clicks.length)]);
    this.setState({
      hasGenerated: true,
    });
  }
  submitAdjectiveQuery(evt){
    evt.preventDefault();
    console.log("I love the poorly educated");
  }
  render(){
    let words = [
      {content: "nouns"},
      {content: "adjective-y"}
    ]
    if (this.state.hasGenerated){
      return (
        <Results words={words} smh={["alkjsdf", 'lkjasdf']}/>
      )
    }
    return(
      <div>
        <form onSubmit={(evt) => this.submitNounQuery(evt)}>
          <button type="submit" className="trumpton-sm center-block"> Make Nouns Great!</button>
        </form>

        <form onSubmit={(evt) => this.submitSloganQuery(evt)}>
          <button type="submit" className="trumpton center-block"> Make Slogans Great!</button>
        </form>

        <form onSubmit={(evt) => this.submitAdjectiveQuery(evt)}>
          <button type="submit" className="trumpton-sm center-block"> Make Adjectives Great!</button>
        </form>
      </div>
    )
  }
}

module.exports = Generate;
