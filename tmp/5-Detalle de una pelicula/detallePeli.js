window.addEventListener("load", function () {

  var urlParams = new URLSearchParams(window.location.search);
  var query = urlParams.get('idDePeli');

  var url = "https://api.themoviedb.org/3/movie/" + query +"?api_key=d72b8119ca0d802447ebd91bded10750&language=en-US"
var article = ""
  fetch (url)
    .then(function(respuesta) {
     return respuesta.json()
   })
    .then(function(informacion) {
     console.log(informacion)

     var titulo = informacion.title
     document.querySelector(".titulos").innerHTML = titulo

     var url = 'https://image.tmdb.org/t/p/w500/'
     var poster =informacion.poster_path
     document.querySelector(".posterPelicula").innerHTML = '<img src=' + url + poster + '>'

    article += "<ul>"
    var arrayDeGeneros = informacion.genres
    var i;
    for (i = 0; i < arrayDeGeneros.length; i++) {
      arrayDeGeneros[i]
      article += "<li> <a href= '../3-Pelis por genero/peliculasPorGenero.html?id=" + arrayDeGeneros[i].id + "'>" + arrayDeGeneros[i].name + "</a> </li>"
    }
        document.querySelector (".detalles").innerHTML = article


   })
   .catch(function(error) {
     console.log("error "+ error)
  })

})
