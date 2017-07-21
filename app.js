
  $("form").on( "submit", function( event ) {

    event.preventDefault();

    formData = $(this).serialize();

    console.log(formData);

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=d0cb4a5c18674d3d8621efeb937e32d8&" + formData;

    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {
      console.log(result);
    }).fail(function(err) {
      throw err;
    });

  });

  var url = "http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=d0cb4a5c18674d3d8621efeb937e32d8&q=hackers";

  $.ajax({
    url: url,
    method: 'GET',
  }).done(function(result) {


    var articles = result.response.docs;
    var headLine = result.response.docs[0].headline.main;
    var author = result.response.docs[0].byline.original;
    var opinion = result.response.docs[0].section_name;
    var pub = result.response.docs[0].pub_date;
    var link = result.response.docs[0].web_url;


    console.log(result);
    console.log(articles);
    console.log(headLine);
    console.log(author);
    console.log(opinion);
    console.log(pub);
    console.log(link);

  }).fail(function(err) {
    throw err;
  });
