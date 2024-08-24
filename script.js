function validarCorreo(correo) {
  var correo = document.getElementById("correo").value;
  var regexcorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (regexcorreo.test(correo)) {
    alert("Correo Valido");
  } else {
    alert("Correo Invalido");
  }
}
