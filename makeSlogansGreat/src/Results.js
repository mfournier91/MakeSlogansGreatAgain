import React, {Component} from "react"

class Results extends Component{
  render(){
    let {words} = this.props;
    console.log(words);
    let results = words.map((word, index) => {
      return (
        <div key={index} className="inlineDiv">
          {word.content}
        </div>
      )
    })

    return (
      <div className="inlineDiv jumbotron">
      Make
      {results}
      Again
      </div>
    )
  }
}

export default Results
