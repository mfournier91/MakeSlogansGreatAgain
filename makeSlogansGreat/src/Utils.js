import $ from 'jquery';

function queryApi() { //Query both apis and return as an array of objects

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
    });
  });
}

function queryNounOnly() {  //query the noun api only and return it
  var randNounUrl = 'https://make-slogans-great-api.herokuapp.com/randomnoun'
  return $.getJSON(randNounUrl).then(function(noun){ //query first api
    noun["content"] = " " + noun["content"].charAt(0).toUpperCase() + noun["content"].slice(1) + " ";

    return noun;
  });
}

function queryAdjOnly() { //query the adjective api only and return it
  var randAdjUrl = 'https://make-slogans-great-api.herokuapp.com/randomadj'
  return $.getJSON(randAdjUrl).then(function(adjective){  //query second
    adjective["content"] = " " + adjective["content"].charAt(0).toUpperCase() + adjective["content"].slice(1) + " ";
    return adjective;
  });
}

export {queryApi, queryNounOnly, queryAdjOnly};
