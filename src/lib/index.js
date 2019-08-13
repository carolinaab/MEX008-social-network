// aqui exportaras las funciones que necesites

// export const myFunction = () => {
//   // aqui tu codigo
//   console.log('Hola mundo!');
// };
// eventos para abrir y cerra modal
"use strict";
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

// se inicializa firebase
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


// SINGN UP
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

// SINGN IN
const inicioSesion = () => {
    // aqui se obtienen los valores
    const userIn = document.getElementById("usuario").value;
    const passIn = document.getElementById("contraseña").value;

    firebase.auth().signInWithEmailAndPassword(userIn, passIn).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);

    });
};
const btnIniciarSesion = document.getElementById("btn-iniciar");
btnIniciarSesion.addEventListener("click", inicioSesion, false);



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
//  avento para abrir redireccionar registro google
const btnGmail = document.getElementById("gmail-register");
const btnEntrarGmail = document.getElementById("gmail")
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

const btnfaceRegister = document.getElementById("face-register");
const btnfaceInicio = document.getElementById("face");
btnfaceRegister.addEventListener("click", ingresoConFacebook, false);
btnfaceInicio.addEventListener("click", ingresoConFacebook, false);