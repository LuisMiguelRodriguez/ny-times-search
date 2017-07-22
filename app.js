
  $("form").on("submit", function( event ) {

    event.preventDefault();
    // var formData = $('#search').val();
    var formData = 'q=';
    // formData = $(this).serialize();
    var search = $('#search').val();
    formData += search;
    formData += '&';
    var begin = $('#begin').val();
    formData += 'begin_date';
    formData += begin;
    formData += '0101&';
    var end = $('#end').val();
    formData += 'end_date';
    formData += end;
    formData += '0101&';
    var page = $('#page').val();
    formData += page;


    // console.log(formData);

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=d0cb4a5c18674d3d8621efeb937e32d8&" + formData;
    console.log('This is the url being called ' + url);

    $.ajax({
      url: url,
      method: 'GET',
      header: {"Access-Control-Allow-Origin": "*"}
    }).done(function(result) {
      console.log(result);
      var articles = result.response.docs;
      for (var i = 0; i < articles.length; i++){

        var div = $('<div>')
          .addClass('articleDiv');
        //Headline
        var el = $('<div>')
          .html('<h2>' + result.response.docs[i].headline.main +'</h2><h4>'+ result.response.docs[i].byline.original +'</h4>');
        div.append(el);

        el = $('<h5>')
          .text(result.response.docs[i].section_name);
        $('#results').append(el);
        div.append(el);

        el = $('<h6>')
          .text(result.response.docs[i].pub_date);
        $('#results').append(el);
        div.append(el);

        el = $('<a>')
          .addClass('idontknow')
          .attr('href', result.response.docs[i].web_url)
          .text("Read Full Article");
          div.append(el);

        $('#results').append(div);

      }
    }).fail(function(err) {
      throw err;
    });

  });
