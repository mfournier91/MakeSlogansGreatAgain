import React, { Component } from 'react';
import './App.css';


class Generate extends Component {

//three forms, each with their own button
//Associate form submission with a function that is defined by this component's properties
  render(){
    let {handleSubmitSloganQuery, handleSubmitNounQuery, handleSubmitAdjectiveQuery} = this.props;
    return(
      <div className="buttonBed">
        <form className="inlineDiv" onSubmit={(evt) => handleSubmitNounQuery(evt)}>
          <button type="submit" className="trumpton-sm"> Make Nouns Great!</button>
        </form>

        <form className="inlineDiv" onSubmit={(evt) => handleSubmitSloganQuery(evt)}>
          <button type="submit" className="trumpton"> Make Slogans Great!</button>
        </form>

        <form className="inlineDiv" onSubmit={(evt) => handleSubmitAdjectiveQuery(evt)}>
          <button type="submit" className="trumpton-sm"> Make Adjectives Great!</button>
        </form>
      </div>
    )
  }
}

module.exports = Generate;
