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

//Redireccionando al home
const goHome = () => {
    location.hash = '/home';
}


  //Observador de usuarios ya registrados
const observer = () => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("existe usuario activo")
      // User is signed in.
      let displayName = user.displayName;
      let email = user.email;
      let emailVerified = user.emailVerified;
      let photoURL = user.photoURL;
      let isAnonymous = user.isAnonymous;
      let uid = user.uid;
      let providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      console.log("no existe usuario activo")
      // ...
    }
  });  
}

const inicioSesion = (e) => {
    // aqui se obtienen los valores
    e.preventDefault();
    const userIn = document.getElementById("usuario").value;
    const passIn = document.getElementById("contraseña").value;

    firebase.auth().signInWithEmailAndPassword(userIn, passIn)
    .then(() => goHome())
    .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);

    });
};

observer();

  // SINGN UP
  const register = (e) => {
    // aqui se obtienen los valores
    e.preventDefault();
    const emailRegister = document.getElementById("email-register").value;
    const passRegister = document.getElementById("password-register").value;
    firebase.auth().createUserWithEmailAndPassword(emailRegister, passRegister)
    .then(() => goHome())
    .catch(function (error) {
        // Handle Errors here.

        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode);
        alert(errorMessage);

    });
  };

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
        })
            .then(() => goHome())
            .catch(function (error) {
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
        })
            .then(() => goHome())
            .catch(function (error) {
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