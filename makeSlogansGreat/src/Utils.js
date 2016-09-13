import $ from 'jquery';

export function queryApi() {

  var randNounUrl = 'https://make-slogans-great-api.herokuapp.com/randomnoun'
  var randAdjUrl = 'https://make-slogans-great-api.herokuapp.com/randomadj'
  return $.getJSON(randNounUrl).then(function(noun){ //query first api

    //put a space and capitalize first letter
    noun["content"] = " " + noun["content"].charAt(0).toUpperCase() + noun["content"].slice(1) + " ";
    return $.getJSON(randAdjUrl).then(function(adjective){  //query second

      adjective["content"] = " " + adjective["content"].charAt(0).toUpperCase() + adjective["content"].slice(1) + " ";

      var response = [noun, adjective]; //return both
      console.log(response);
      return response;
    })
  })
}
