$(function () {
  function queryWind () {
    $.ajax({
      url: `https://query.yahooapis.com/v1/public/yql?q=select%20wind%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${$('input#city_search').val()}%22)&format=json`,
      dataType: 'json',
      success: function (data) {
        $('div#wind_speed').text(data.query.results.channel.wind.speed);
      }
    });
  }
  $('input#btn_search').click(queryWind());
  $('input#city_search').keydown(function (event) {
    if (event.which === 13) { queryWind(); }
  });
});
