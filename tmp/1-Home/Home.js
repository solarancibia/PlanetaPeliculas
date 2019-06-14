window.addEventListener("load", function(){
var nombre= prompt ("Ingrese su nombre")
var reemplazo = document.querySelector("p.saludo")
reemplazo.innerText= "Bienvenid@" + " " + nombre

fetch("https://api.themoviedb.org/3/trending/all/day?api_key=d72b8119ca0d802447ebd91bded10750")
    .then(function(respuesta) {
     return respuesta.json()
   })
    .then(function(informacion) {
     var peliculas = informacion.results

     for (var i = 0; i < 6; i++) {
       var titulo = peliculas[i].title
       var img = peliculas[i].poster_path
       var id = peliculas[i].id
      document.querySelector("ul.uk-slider-items uk-child-width-1-5").innerHTML += '<li>img src=""https://image.tmdb.org/t/p/original/' + img + '"alt="" >'"</li>"


     }
  })
)
}


fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=d72b8119ca0d802447ebd91bded10750&language=en-US&page=1")
    .then(function(respuesta) {
     return respuesta.json()
   })
    .then(function(informacion) {
     var peliculas2 = informacion.data

     for (var i = 0; i < 6; i++) {
       var titulo = peliculas2[i].title
       var img = peliculas2[i].poster_path
       var id = peliculas2[i].id
       var rated = peliculas2[i].vote_average
      document.querySelector("ul.uk-slider-items uk-child-width-1-5").innerHTML += '<img class="posters" src="https://image.tmdb.org/t/p/original/' + img + '" alt="">'
     }
    })
)
}
