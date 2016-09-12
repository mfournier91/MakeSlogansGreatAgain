import $ from 'jquery';

export function queryApi() {
  var nounUrl = 'http://localhost:8080/nouns';
  var adjUrl = 'http://localhost:8080/adjectives'
  return $.getJSON(nounUrl).then(function(nouns){
    var noun = nouns[Math.floor(Math.random()*nouns.length)];
    noun["content"] = " " + noun["content"] + " ";
    return $.getJSON(adjUrl).then(function(adjectives){
      var adjective = adjectives[Math.floor(Math.random()*adjectives.length)];
      adjective["content"] = " " + adjective["content"] + " ";

      var response = [noun, adjective];
      console.log(response);
      return response;
    })
  })
}
