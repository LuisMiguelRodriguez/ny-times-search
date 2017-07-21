
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

url += '?' + $.param({
  'api-key': "d0cb4a5c18674d3d8621efeb937e32d8"
});


$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);

  //Grab value from search box
  



}).fail(function(err) {
  throw err;
});
