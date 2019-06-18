window.onload = function() {
  var urlFija = " https://image.tmdb.org/t/p/original/"
  var article = ""


  var queryString = new URLSearchParams(location.search)
  var buscador = queryString.get("q")


// IDEA: "https://api.themoviedb.org/3/search/collection?api_key=72c0f0e3c6590f5af907c8bd0778da1d&language=" + buscador + "en-US&page=1"
// IDEA:
  fetch("https://api.themoviedb.org/3/search/movie?api_key=489728903a2b25dc358b98664c14a627&query="  + buscador +  "&page=1&include_adult=true")
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(informacion) {
      console.log(informacion);

      var arrayDeBuscador = informacion.results
      console.log(arrayDeBuscador);

      for (var i = 0; i < 5; i++) {
        // IDEA: var id = arrayDeBuscador[i].id
        var title = arrayDeBuscador[i].title
        var url =  arrayDeBuscador[i].poster_path


        article = "<article> "
        article +=    "<a href='../5-Detalle de una pelicula/detallePeli.html'> <p>" + title + "</p> "
        article +=      "<img src= " + urlFija + url + " width='30%'  >"
        article +=    "</a>"

        article += "</article>"
        document.querySelector("section ").innerHTML += article
      }
        showSlides(slideIndex);
    })
    .catch(function(error) {
      console.log("Error: " + error);
    })
  }
