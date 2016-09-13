import React, {Component} from "react"

class Results extends Component{
  render(){
    let {words} = this.props;
    let {noun} = this.props;
    let {adj} = this.props;
    //console.log("hi", noun, adj , words);
    console.log(noun["content"]);


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
