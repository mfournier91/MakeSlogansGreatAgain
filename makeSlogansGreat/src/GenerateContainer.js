import React, {Component} from 'react';
import Generate from "./Generate"
import Results from './Results';
import {queryApi, queryNounOnly, queryAdjOnly} from './Utils';


class GenerateContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      hasGenerated: false,
      words: [],
      noun: {},
      adj: {},
    }
  }
  submitNounQuery(evt){
      evt.preventDefault();
      console.log("Make nouns noun-ier");
      queryNounOnly(this.state.query).then(data => {
        this.setState({
          noun: data
        })
      })
  }
  submitSloganQuery(evt){
    evt.preventDefault();
    queryApi(this.state.query).then(data => {
      this.setState({
        hasGenerated: true,
        words: data,
        noun: data[0],
        adj: data[1]
      });
    });
  }
  submitAdjectiveQuery(evt){
    evt.preventDefault();
    console.log("I love the poorly educated");
    queryAdjOnly(this.state.query).then(data => {
      this.setState({
        adj: data
      })
    })
  }
  render(){
    let starterWords = [
      {content: " Clicking "},
      {content: " Compulsory "}
    ];

    if (this.state.hasGenerated){
      return (
        <div>
        <Results words={this.state.words} noun={this.state.noun} adj={this.state.adj}/>
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
