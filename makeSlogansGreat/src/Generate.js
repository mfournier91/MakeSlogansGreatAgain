import React, { Component } from 'react';
import './App.css';


class Generate extends Component {


  render(){
    let {handleSubmitSloganQuery, handleSubmitNounQuery, handleSubmitAdjectiveQuery} = this.props;
    return(
      <div>
        <form onSubmit={(evt) => handleSubmitNounQuery(evt)}>
          <button type="submit" className="trumpton-sm center-block"> Make Nouns Great!</button>
        </form>

        <form onSubmit={(evt) => handleSubmitSloganQuery(evt)}>
          <button type="submit" className="trumpton center-block"> Make Slogans Great!</button>
        </form>

        <form onSubmit={(evt) => handleSubmitAdjectiveQuery(evt)}>
          <button type="submit" className="trumpton-sm center-block"> Make Adjectives Great!</button>
        </form>
      </div>
    )
  }
}

module.exports = Generate;
