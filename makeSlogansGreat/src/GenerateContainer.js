import React, {Component} from 'react';
import Generate from "./Generate"
import Results from './Results';
import {queryApi} from './Utils';

class GenerateContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      hasGenerated: false,
      words: [],
    }
  }
  submitNounQuery(evt){
      evt.preventDefault();
      console.log("Make nouns noun-ier");
  }
  submitSloganQuery(evt){
    evt.preventDefault();
    queryApi(this.state.query).then(data => {
      this.setState({
        hasGenerated: true,
        words: data,
      });
    });
  }
  submitAdjectiveQuery(evt){
    evt.preventDefault();
    console.log("I love the poorly educated");
  }
  render(){
    let starterWords = [
      {content: " Clicking "},
      {content: " Compulsory "}
    ];

    if (this.state.hasGenerated){
      return (
        <div>
        <Results words={this.state.words} noun={this.state.words[0]} adj={this.state.words[1]}/>
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
      <div>
        <Results words={starterWords} noun={starterWords[0]} adj={starterWords[1]}/>
        <Generate
          handleSubmitSloganQuery={(evt) => this.submitSloganQuery(evt)}
          handleSubmitNounQuery={(evt) => this.submitNounQuery(evt)}
          handleSubmitAdjectiveQuery={(evt) => this.submitAdjectiveQuery(evt)}
          />
    </div>
    )
  }
  }

}


module.exports = GenerateContainer;
