
function validarUsuario() {

    let usuario = "neider";
    let contrasena = "123";


    let usuarioInput = document.getElementById("usuario").value;
    let contrasenaInput = document.getElementById("contrasena").value;

    let mensaje = document.getElementById("mensaje");

    // Limpia el mensaje anterior
    mensaje.textContent = "";
    mensaje.className = "";

    if (usuarioInput == "" || contrasenaInput == "") {
        mensaje.textContent = "El usuario y/o la contraseña no pueden estar vacíos";
        mensaje.className = "error";
        return false;
    }
    else if (usuario == usuarioInput && contrasena == contrasenaInput) {
        mensaje.textContent = "Inicio de sesión exitoso. Redirigiendo...";
        mensaje.className = "success";
       

        setTimeout(function () {
            window.location.href = "inicio.html"; // URL de redirección
        }, 1500);

        return false;
    }
    else{ 
        mensaje.textContent = "Usuario y/o contraseña incorrectos"; 
        mensaje.className = "error";
        return false; 
    }

}