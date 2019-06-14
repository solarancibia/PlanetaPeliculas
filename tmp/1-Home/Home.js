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
     console.log(informacion)

     for (var i = 0; i < 6 ; i++) { //informacion.results.length
       console.log('esto es informacion' + peliculas);
       var titulo = peliculas[i].title
       var url = 'https://image.tmdb.org/t/p/w500/'
       var img =  peliculas[i].poster_path;
       var id = peliculas[i].id

      var div;
      div += '<li>'
      div += '<img src=' + url + img + '>'
      div += '<div class="uk-position-center uk-panel"><h1>' + titulo + '</h1></div>'
      div += '</li>'

      console.log(div);

      document.querySelector("#listaPopulares").innerHTML += div
     }
    })

 .catch(function(error) {
   console.log("error "+ error)
 })

})
