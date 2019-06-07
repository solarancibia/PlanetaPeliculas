window.addEventListener("load", function() {}

  fetch("URL")
    .then(function(respuesta) {
      return respuesta.json()
    })
    .then(function(informacion) {
      var peliculas = informacion.???????

      for (var i = 0; i < 6; i++) {
        document.querySelector("CONTENEDOR").innerHTML += '<img class="posters" src="' + ALGOOO + '" alt="">'
      }
    })

)
