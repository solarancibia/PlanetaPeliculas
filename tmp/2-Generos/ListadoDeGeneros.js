window.onload = function(){
   document.querySelector(".logincompleto").onSubmit = function (yey){
     var nombre = document.querySelector(".name")
     document.querySelector(".saludo").innerHTML = "Welcome" + nombre
   }



}
