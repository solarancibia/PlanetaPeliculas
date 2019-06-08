window.onload = function(){
   document.querySelector("form.logincompleto").onSubmit = function (yey){
     var nombre = document.querySelector("label.name")
     var reemplazo = document.querySelector("p.saludo")
     reemplazo.innerText = "Welcome" + " " + nombre
   }


  // var nombre= prompt ("Ingrese su nombre")
  // var reemplazo = document.querySelector("p.saludo")
   //reemplazo.innerText= "Bienvenid@" + " " + nombre

}
