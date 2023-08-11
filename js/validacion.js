function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

    

document.getElementById("regBtn").addEventListener("click", function (){
    const checkboxInput = document.querySelectorAll("#terminos");
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    const password1= document.querySelector("#password1").value;
    const password2= document.querySelector("#password2").value;

    

    if (nombre === "" || apellido === "" || email === "" || password1 === "" || password2 === "" || !checkboxInput) {
      showAlertError();
      return;
    }
    

    if (password1.lenght >= 6 || password1 === password2){
        showAlertSuccess();
    } else {
        showAlertError();
    }

})


