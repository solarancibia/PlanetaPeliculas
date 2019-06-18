window.addEventListener("load",function() {
  // che, hay algo en sesion????
  if (sessionStorage.getItem("Usuario") != null) {
    // si hay data, mostrala
    document.querySelector("a#login").style.display = "none"
    welcomeUser()
  }
  // no hay data, no hago nada
 borrarboton()
preferido()
     document.querySelector("form.logincompleto").onsubmit = function (yey){
       welcomeUser()
       yey.preventDefault()
       document.querySelector(".uk-modal-close").click()
       var nombre = document.querySelector("input.name").value
       sessionStorage.setItem("Usuario", nombre)
 borrarboton()
 preferido()
     }


function borrarboton() {
  if (sessionStorage.getItem("Usuario") != null) {
    document.querySelector("a#login").style.display = "none"
  }

}

function preferido(){
  if (sessionStorage.getItem("Usuario") != null) {
document.querySelector("li#pelispref").style.display = "block"

  }
}



  function welcomeUser(){
    var nombre = document.querySelector("input.name").value
    console.log(nombre);
    if (nombre.length===0) {
      var nombre = sessionStorage.getItem("Usuario")
    }

    var reemplazo = document.querySelector("p.saludo")
    reemplazo.innerText = "Welcome" + " " + nombre
  }
})
