// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

//Importamos los archivos de las secciones de la pagina
"use strict";

import Navbar from './view/navbar.js'
import Login from './view/login.js'
import Home from './view/home.js'
import Register from './view/registro.js'
import Error404 from './view/error.js'
// import Timeline from './view/timeline.js'
import Utils from './services/utils.js'

//Se enlistan las rutas permitidas, si no se encuentran marcara error

const routes = {
  '/'          :Login 
  ,'/register' : Register
  ,'/home'     : Home
  ,'/navbar'   : Navbar
  ,'/error'    : Error404
  // ,'/timeline' : Timeline
};

//El codigo del enrutador

const route = async () => {
  // Elementos de vista de carga diferida:
  // Se visualizan solo los elementos en turno
  const header = null || document.getElementById("header-container");
  const content = null || document.getElementById("page-container");

  //Representa los elementos estático en la página
  header.innerHTML = await Navbar.render();
  await Navbar.after_render();

  // Obtener el URL analizado de la barra de direcciones
  let request = Utils.parseRequestURL();

  // Analiza la URL y si tiene una parte de id, cámbiala con la cadena ": id"
  let parsedURL = (request.resource ? '/' + request.resource : '/') 
        + (request.id ? '/:id' : '') 
        + (request.verb ? '/' + request.verb : '');

  // console.log("PARSED", parsedURL);
  // Obtenga la página de nuestro hash de rutas compatibles.
  let page = routes[parsedURL] ? routes[parsedURL] : Error404;

  content.innerHTML = await page.render();
  await page.after_render();

};
//Escucha el cambio de hash
window.addEventListener("hashchange", route);
//Escucha la pagina cargar
window.addEventListener("load", route);

// let abrir = document.getElementById("abrir"),
//   open = document.getElementById("open"),
//   conteiner = document.getElementById("conteiner"),
//   cerrar = document.getElementById("cerrar");
// // variables para registro con email y contraseña
// let botonRegistrarNodo = document.getElementById("registrarse"),
//     btnIniciarSesion = document.getElementById("btn-iniciar"),
//     usuarioNodo = document.getElementById("usuario"),
//     contraseñaNodo = document.getElementById("contraseña"),
//     btnfaceRegister = document.getElementById("face-register"),
//     btnfaceInicio = document.getElementById("face");
//     btnCloseSesion = document.getElementById("close-sesion");

// // aqui para registro gmail
// const btnGmail = document.getElementById("gmail-register"),
//       btnEntrarGmail = document.getElementById("gmail");
    
// // eventos para abrir y cerra modal
// abrir.addEventListener("click", () => {
//   open.classList.add("active")
//   conteiner.classList.add("active")
// });
// cerrar.addEventListener("click", () => {
//   open.classList.remove("active")
//   conteiner.classList.remove("active")


// });

// // comenzando con firebase

// var firebaseConfig = {
//   apiKey: "AIzaSyBmKXHHXPk-3WQ49qZhy4JZDMtcN_IrCt0",
//   authDomain: "fitclubredsocial.firebaseapp.com",
//   databaseURL: "https://fitclubredsocial.firebaseio.com",
//   projectId: "fitclubredsocial",
//   storageBucket: "",
//   messagingSenderId: "151023209904",
//   appId: "1:151023209904:web:bae938869cf0dc09"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig)


// // evento para correo y contraseña
// botonRegistrarNodo.addEventListener("click", (e) => {
//   // aqui se obtienen los valores
//   e.preventDefault();
//   let emailText = document.getElementById("email-register").value;
//   let passText = document.getElementById("password-register").value;

//   // SINGN up
//   firebase.auth().createUserWithEmailAndPassword(emailText, passText).catch(function (error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     console.log(errorCode);
//     console.log(errorMessage);
//     // ...
//   });
// });
// // SINGN IN
// btnIniciarSesion.addEventListener("click", () => {
//   // aqui se obtienen los valores
//    emailText =  usuarioNodo.value;
//    passText = contraseñaNodo.value;
    
//    firebase.auth().signInWithEmailAndPassword(emailText, passText).catch(function (error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     console.log(errorCode);
//     console.log(errorMessage);
//     // ...
//   });
// });

// //Observador de usuarios ya registrados
// const observer = () => {
//   firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//       console.log("existe usuario activo")
//       wall();
//       // User is signed in.
//       var displayName = user.displayName;
//       var email = user.email;
//       var emailVerified = user.emailVerified;
//       var photoURL = user.photoURL;
//       var isAnonymous = user.isAnonymous;
//       var uid = user.uid;
//       var providerData = user.providerData;
//       // ...
//     } else {
//       // User is signed out.
//       console.log("no existe usuario activo")
//       // ...
//     }
//   });  
// }
// observer();

// //entrar a sesion y cerrar sesion
// const wall = () => {
//   let welcome = document.getElementById("welcome");
//   welcome.innerHTML = `
//       <p>Bienvenido</p>
//       <button id="close-sesion">Cerrar Sesión</button>
//       `;
// }
// const closeSesion = () => {
//   firebase.auth() .signOut();
//   // .then(() => {
//   //   console.log("Saliendo...");
//   // })
//   // .catch((error) => {
//   //   console.log(error)
//   // })
// }

// btnCloseSesion.addEventListener("click", closeSesion);

// // con google
// const googleSignIn = () => {
//   if (!firebase.auth().currentUser) {
//     let provider = new firebase.auth.GoogleAuthProvider();
//     provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
//     firebase.auth().signInWithRedirect(provider).then(function (result) {
//       // This gives you a Google Access Token. You can use it to access the Google API.
//       let token = result.credential.accessToken;
//       // The signed-in user info.
//       let user = result.user;
     
//       // ...
//     }).catch(function (error) {
//       // Handle Errors here.
//       let errorCode = error.code;

//       let errorMessage = error.message;
//       console.log(errorMessage);
//       // The email of the user's account used.
//       let email = error.email;
//       console.log(email);
//       // The firebase.auth.AuthCredential type that was used.
//       let credential = error.credential;
//       console.log(credential);
//       if (errorCode === "auth/account-exists-with-different-credential") {
//         alert("es el mismo usuario")
//       } 
//       // ...
//     });

//   } else {
//     firebase.auth() .signOut();

//   }
// };
// //  avento para abrir el modal de registro google
// btnGmail.addEventListener("click", googleSignIn, false)
// btnEntrarGmail.addEventListener("click", googleSignIn, false);

// //  registrando con facebook
// const ingresoConFacebook = () => {
//  if (!firebase.auth() .currentUser) {

// var provider = new firebase.auth.FacebookAuthProvider();
//  provider.addScope("public_profile")
// firebase.auth().signInWithRedirect(provider).then(function(result) {
//   // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//   var token = result.credential.accessToken;
//   // The signed-in user info.
//   var user = result.user;
//   console.log(user);
//   // ...
// }).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // The email of the user's account used.
//   var email = error.email;
//   // The firebase.auth.AuthCredential type that was used.
//   var credential = error.credential;
//   // ...
//   if (errorCode ==="auth/account-exist-with-different-credential"){
//     alert("es el mismo usuario")
//   }
// });
// }  else {
//   firebase.auth() .signOut();
// }
// };


// btnfaceRegister.addEventListener("click", ingresoConFacebook, false);
// btnfaceInicio.addEventListener("click",ingresoConFacebook, false );
