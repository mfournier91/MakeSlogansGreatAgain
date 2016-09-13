import $ from 'jquery';

export function queryApi() {
  var nounUrl = 'http://localhost:8080/nouns';
  var adjUrl = 'http://localhost:8080/adjectives'
  return $.getJSON(nounUrl).then(function(nouns){ //query first api
    var noun = nouns[Math.floor(Math.random()*nouns.length)];

    //put a space and capitalize first letter
    noun["content"] = " " + noun["content"].charAt(0).toUpperCase() + noun["content"].slice(1) + " ";
    return $.getJSON(adjUrl).then(function(adjectives){  //query second
      var adjective = adjectives[Math.floor(Math.random()*adjectives.length)];

      adjective["content"] = " " + adjective["content"].charAt(0).toUpperCase() + adjective["content"].slice(1) + " ";

      var response = [noun, adjective]; //return both
      console.log(response);
      return response;
    })
  })
}
