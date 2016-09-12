import React, {Component} from 'react';
import Generate from "./Generate"
import Results from './Results';

class GenerateContainer extends Component {
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
    ];

    if (this.state.hasGenerated){
      return (
        <div>
          <Results words={words}/>
          <Generate
            handleSubmitSloganQuery={(evt) => this.submitSloganQuery(evt)}
            handleSubmitNounQuery={(evt) => this.submitNounQuery(evt)}
            handleSubmitAdjectiveQuery={(evt) => this.submitAdjectiveQuery(evt)}
          />
        </div>
      )
    }
    else {
    return (
      <Generate
      handleSubmitSloganQuery={(evt) => this.submitSloganQuery(evt)}
      handleSubmitNounQuery={(evt) => this.submitNounQuery(evt)}
      handleSubmitAdjectiveQuery={(evt) => this.submitAdjectiveQuery(evt)}
      />
    )
  }
  }

}


module.exports = GenerateContainer;
