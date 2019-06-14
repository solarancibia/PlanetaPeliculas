window.onload = function(){
   document.querySelector("form.logincompleto").onsubmit = function (yey){
     var nombre = document.querySelector("input.name").value
     var reemplazo = document.querySelector("p.saludo")
     reemplazo.innerText = "Welcome" + " " + nombre
     yey.preventDefault()
     document.querySelector(".uk-modal-close").click()
     sessionStorage.setItem("Usuario", nombre)

   }

  if (sessionStorage.getItem("Usuario") != null) {
    document.querySelector("a#login").style.display = "none"
  }
}
