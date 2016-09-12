import React, {Component} from "react"

class Results extends Component{
  render(){
    let {words} = this.props;
    console.log(words);
    let results = words.map((word, index) => {
      return (
        <div key={index}>
          {word.content}
        </div>
      )
    })

    return (
      <div>
      Make
      {results}
      Again
      </div>
    )
  }
}

export default Results
