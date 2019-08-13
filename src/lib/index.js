// aqui exportaras las funciones que necesites

// export const myFunction = () => {
//   // aqui tu codigo
//   console.log('Hola mundo!');
// };

<<<<<<< HEAD

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmKXHHXPk-3WQ49qZhy4JZDMtcN_IrCt0",
    authDomain: "fitclubredsocial.firebaseapp.com",
    databaseURL: "https://fitclubredsocial.firebaseio.com",
    projectId: "fitclubredsocial",
    storageBucket: "",
    messagingSenderId: "151023209904",
    appId: "1:151023209904:web:bae938869cf0dc09"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
=======
// Your web app's Firebase configuration
>>>>>>> bdaab15cacacab1ce97fcae6b70e00a36483267b


// registrar  

let emailNodo = document.getElementById("email-register");
let passwordNodo = document.getElementById("password-register");
let botonRegistrarNodo = document.getElementById("registrarse");

botonRegistrarNodo.addEventListener("click", () => {
    const emailText = emailNodo.value;
    const passText = passwordNodo.value;
    console.log(emailText, passText);
    //  // SINGN up
    firebase.auth().createUserWithEmailAndPassword(emailText, passText).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);

        // ...
    });
});
