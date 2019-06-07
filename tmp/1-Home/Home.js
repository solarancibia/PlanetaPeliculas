window.addEventListener("load", function(){
var nombre= prompt ("Ingrese su nombre")
var reemplazo = document.querySelector("p.saludo")
reemplazo.innerText= "Bienvenid@" + " " + nombre

fetch("https://api.themoviedb.org/3/trending/all/day?api_key=d72b8119ca0d802447ebd91bded10750")
    .then(function(respuesta) {
     return respuesta.json()
   })
    .then(function(informacion) {
     var peliculas = informacion.data

     for (var i = 0; i < 6; i++) {
       var titulo = peliculas[i].title
       var img = peliculas[i].poster_path
       var id = peliculas[i].id
      document.querySelector("div.uk-position-relative uk-visible-toggle uk-light").innerHTML += '<img class="posters" src="https://' + img + '" alt="">'
     }
    })
)
}
