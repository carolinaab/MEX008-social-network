let Register = {
  render: async () => {
    let view = /* html */ `
        <div id="open" class="modal">

        <div class="conteiner" id="conteiner">

          <form id="modal-content" class="modal-content">
            <a href="#" id="cerrar" class="cerrar">X</a>
            <h2>Crear una cuenta</h2>
            <p>Registrate con</p>
            <section class="aplications">
              <a href="#"><img src="img-page/facebook.png" alt="facebook" id="face-register" width="50"></a>
              <a href="#"><img src="img-page/gmail.png" alt="gmail" id="gmail-register" width="50"></a>
            </section>
            <input type="text" placeholder="Nombre completo" name="name-register" autocomplete="off" id="nombre-register">
            <input type="text" placeholder="Correo electrónico" name="email-register" autocomplete="off"
              id="email-register">
            <input type="password" placeholder="Contraseña" id="password-register">
            <input type="text" placeholder="Fecha de nacimiento" id="birthday">
            </p>
            <p>Al hacer click en Registrarse, acepta los <a href="Términos y condiciones" class="terminos"> Términos y
                Condiciones</a> de
              uso
              de Fit Club</p>
            <div>
              <button class="registrarse" id="registrarse">
                Registrarse
              </button>
            </div>
        </div>
      </div>
        `
    return view
  },
  after_render: async () => {
    const abrir = document.getElementById("abrir");
    const open = document.getElementById("open-modal");
    const conteiner = document.getElementById("conteiner");
    const cerrar = document.getElementById("cerrar");
    abrir.addEventListener("click", () => {
      open.classList.add("active")
      conteiner.classList.add("active")
    });
    cerrar.addEventListener("click", () => {
      open.classList.remove("active")
      conteiner.classList.remove("active")
    });
    const register = () => {
      // aqui se obtienen los valores
      const emailRegister = document.getElementById("email-register").value;
      const passRegister = document.getElementById("password-register").value;
      firebase.auth().createUserWithEmailAndPassword(emailRegister, passRegister).catch(function (error) {
        // Handle Errors here.

        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);

      });
    };
    const btnRegister = document.getElementById("registrarse");
    btnRegister.addEventListener("click", register, false);
  }
}
export default Register;