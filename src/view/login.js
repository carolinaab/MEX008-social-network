let Login = {
  render: async () => {
    let view = /* html */ `
        <!-- Seccion donde el usuario ingresa datos ya registrados para iniciar sesion -->
    <section class="registry">
      <section>

        <figure>
          <img src="img-page/fit-blanco.png" alt="logo" id="logo">
        </figure>
        <section class="inputs">
          <input type="text" placeholder="Correo electrónico" id="usuario" autocomplete="on">
          <input type="password" placeholder="Contraseña" id="contraseña">
          <button id="btn-iniciar">Iniciar Sesión</button>

        </section>
        <!-- seccion se le piden datos extras -->
        <section class="forget-password">
          <label>
            <input type="checkbox" name="remember" id="remember" checked>
            Recordarme
          </label>
          <a href="#" id="abrir">Registrate</a>
        </section>

        <p>O inicia con</p>
        <!-- Seccion inicia sesion con otra aplicacion -->
        <section class="aplications">
          <a href="#"><img src="img-page/facebook.png" alt="facebook" id="face"></a>
          <a href="#"><img src="img-page/gmail.png" alt="gmail" id="gmail"></a>
        </section>
      </section>

      <!-- modal -->
      <div id="open-modal" class="modal">

        <div class="conteiner" id="conteiner">

          <form id="modal-content" class="modal-content">
            <a href="#" id="cerrar" class="cerrar">X</a>
            <h2>Crear una cuenta</h2>
            <p>Registrate con</p>
            <section class="aplications">
              <a href="#"><img src="img-page/facebook.png" alt="facebook" id="face-register" width="50"></a>
              <a href="#"><img src="img-page/gmail.png" alt="gmail" id="gmail-register" width="50"></a>
            </section>

            <!-- <input type="text" placeholder="Nombre completo" autocomplete="on" required id="name-register">  -->

            <input type="text" placeholder="Correo electrónico" name="email-register" autocomplete="on"
              id="email-register">
            <input type="password" placeholder="Contraseña" id="password-register">
            <!-- <input type="text" placeholder="Fecha de nacimiento"id="birthday"> -->
            <!-- <label for="year" class="label">Año de nacimiento</label> -->

          
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


    </section>

    </div>
    </div>
        `
    return view
  },
  after_render: async () => {
    //Modal

    const abrir = document.getElementById("abrir");
    const open = document.getElementById("open-modal");
    const conteiner = document.getElementById("conteiner");
    const cerrar = document.getElementById("cerrar");

    abrir.addEventListener("click", () => {
      open.classList.add("active");
      conteiner.classList.add("active");
    });
    cerrar.addEventListener("click", () => {
      open.classList.remove("active");
      conteiner.classList.remove("active");
    });

    //Registro
    const btnRegister = document.getElementById("registrarse");
    btnRegister.addEventListener("click", register, false);

    //Inicio de sesión
    const btnIniciarSesion = document.getElementById("btn-iniciar");
    btnIniciarSesion.addEventListener("click", inicioSesion, false);



    //  Evento para abrir redireccionar registro google
    const btnGmail = document.getElementById("gmail-register");
    const btnEntrarGmail = document.getElementById("gmail")
    btnGmail.addEventListener("click", googleSignIn, false)
    btnEntrarGmail.addEventListener("click", googleSignIn, false);


    // Evento para abrir redireccionar registro facebook
    const btnfaceRegister = document.getElementById("face-register");
    const btnfaceInicio = document.getElementById("face");
    btnfaceRegister.addEventListener("click", ingresoConFacebook, false);
    btnfaceInicio.addEventListener("click", ingresoConFacebook, false);
  }
}
export default Login;