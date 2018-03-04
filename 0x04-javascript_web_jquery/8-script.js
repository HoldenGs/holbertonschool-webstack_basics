$.get('http://swapi.co/api/films?format=json', function (data) {
  data.results.map(function (film) {
    $('div#list_movies').append(`<li>${film.title}</li>`);
  });
});
