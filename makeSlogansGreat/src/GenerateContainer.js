import React, {Component} from 'react';
import Generate from "./Generate"
import Results from './Results';
import {queryApi, queryNounOnly, queryAdjOnly} from './Utils';


class GenerateContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      noun: {content: " Clicking "},
      adj: {content: " Compulsory "},
    }
  }
  submitNounQuery(evt){
      evt.preventDefault();
      console.log("Make nouns noun-ier");
      queryNounOnly().then(data => {
        this.setState({
          noun: data
        })
      })
  }
  submitSloganQuery(evt){
    evt.preventDefault();
    queryApi().then(data => {
      this.setState({
        noun: data[0],
        adj: data[1]
      });
    });
  }
  submitAdjectiveQuery(evt){
    evt.preventDefault();
    console.log("I love the poorly educated");
    queryAdjOnly().then(data => {
      this.setState({
        adj: data
      })
    })
  }
  render(){

      return (
        <div>
        <Results noun={this.state.noun} adj={this.state.adj}/>
          <Generate
            handleSubmitSloganQuery={(evt) => this.submitSloganQuery(evt)}
            handleSubmitNounQuery={(evt) => this.submitNounQuery(evt)}
            handleSubmitAdjectiveQuery={(evt) => this.submitAdjectiveQuery(evt)}
          />
        </div>
      )

  }

}


module.exports = GenerateContainer;
