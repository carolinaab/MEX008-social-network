// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();


// aqui las variables 
// variables para abrir el modal

let abrir = document.getElementById("abrir"),
    open = document.getElementById("open"),
    conteiner = document.getElementById("conteiner"),
    cerrar = document.getElementById("cerrar");
// variables para registro con email y contraseña
let emailNodo = document.getElementById("email-register"),
    passwordNodo = document.getElementById("password-register"),
    botonRegistrarNodo = document.getElementById("registrarse"),
    btnIniciarSesion = document.getElementById("btn-iniciar"),
    usuarioNodo = document.getElementById("usuario"),
    contraseñaNodo = document.getElementById("contraseña"),
    btnfaceRegister = document.getElementById("face-register"),
    btnfaceInicio = document.getElementById("face");

// aqui para registro gmail
const btnGmail = document.getElementById("gmail-register"),
    btnEntrarGmail = document.getElementById("gmail");

// eventos para abrir y cerra modal
abrir.addEventListener("click", () => {
    open.classList.add("active")
    conteiner.classList.add("active")
});
cerrar.addEventListener("click", () => {
    open.classList.remove("active")
    conteiner.classList.remove("active")


});

// comenzando con firebase

var firebaseConfig = {
    apiKey: "AIzaSyBmKXHHXPk-3WQ49qZhy4JZDMtcN_IrCt0",
    authDomain: "fitclubredsocial.firebaseapp.com",
    databaseURL: "https://fitclubredsocial.firebaseio.com",
    projectId: "fitclubredsocial",
    storageBucket: "",
    messagingSenderId: "151023209904",
    appId: "1:151023209904:web:bae938869cf0dc09"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)


// evento para correo y contraseña
botonRegistrarNodo.addEventListener("click", () => {
    // aqui se obtienen los valores
    let emailText = emailNodo.value;
    let passText = passwordNodo.value;

    // SINGN up
    firebase.auth().createUserWithEmailAndPassword(emailText, passText).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
    });
});
// SINGN IN
btnIniciarSesion.addEventListener("click", () => {
    // aqui se obtienen los valores
    emailText = usuarioNodo.value;
    passText = contraseñaNodo.value;

    firebase.auth().signInWithEmailAndPassword(emailText, passText).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
    });
});

// con google
const googleSignIn = () => {
    if (!firebase.auth().currentUser) {
        let provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        firebase.auth().signInWithRedirect(provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            let token = result.credential.accessToken;
            // The signed-in user info.
            let user = result.user;

            // ...
        }).catch(function (error) {
            // Handle Errors here.
            let errorCode = error.code;

            let errorMessage = error.message;
            console.log(errorMessage);
            // The email of the user's account used.
            let email = error.email;
            console.log(email);
            // The firebase.auth.AuthCredential type that was used.
            let credential = error.credential;
            console.log(credential);
            if (errorCode === "auth/account-exists-with-different-credential") {
                alert("es el mismo usuario")
            }
            // ...
        });

    } else {
        firebase.auth().signOut();

    }
};
//  avento para abrir el modal de registro google
btnGmail.addEventListener("click", googleSignIn, false)
btnEntrarGmail.addEventListener("click", googleSignIn, false);

//  registrando con facebook
const ingresoConFacebook = () => {
    if (!firebase.auth().currentUser) {

        var provider = new firebase.auth.FacebookAuthProvider();
        provider.addScope("public_profile")
        firebase.auth().signInWithRedirect(provider).then(function (result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log(user);
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            if (errorCode === "auth/account-exist-with-different-credential") {
                alert("es el mismo usuario")
            }
        });
    } else {
        firebase.auth().signOut();
    }
};


btnfaceRegister.addEventListener("click", ingresoConFacebook, false);
btnfaceInicio.addEventListener("click", ingresoConFacebook, false);
