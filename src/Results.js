import React, {Component} from "react"

class Results extends Component{
  render(){
    //Get results' properties from GenerateContainer's state
    let {noun} = this.props;
    let {adj} = this.props;
    //console.log("hi", noun, adj , words);
    console.log(noun["content"]);

    //Render the properties
    return (
      <div className="inlineDiv jumbotron">
      Make
      {[noun["content"], adj["content"]]}
      Again
      </div>
    )
  }
}

export default Results
