import React, {Component} from 'react';
import Generate from "./Generate"
import Results from './Results';
import {queryApi, queryNounOnly, queryAdjOnly} from './Utils';

class GenerateContainer extends Component {
  constructor(props){
    super(props)
    //Define initial State
    this.state = {
      noun: {content: " Clicking "},
      adj: {content: " Compulsory "},
    }
  }
  submitNounQuery(evt){ //function invoked by clicking on button in the Generate component
      evt.preventDefault();
      //Define State if they click on noun button
      queryNounOnly().then(data => { //See Utils.js to see this function.
        this.setState({
          noun: data
        });
      });
  }
  submitSloganQuery(evt){ //function invoked by clicking on button in the Generate component
    evt.preventDefault();
    //Define State if they click on Slogans button
    queryApi().then(data => { //See Utils.js to see this function.
      this.setState({
        noun: data[0],
        adj: data[1]
      });
    });
  }
  submitAdjectiveQuery(evt){ //function invoked by clicking on button in the Generate component
    evt.preventDefault();
    //Define state if they click on adjective button
    queryAdjOnly().then(data => { //See Utils.js to see this function.
      this.setState({
        adj: data
      });
    });
  }
  render(){
 //The handle* properties on Generate component cause the invoking of the submit* functions in this component.
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
