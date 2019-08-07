// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

let abrir = document.getElementById("abrir"),
    open = document.getElementById("open"),
    conteiner = document.getElementById("conteiner"),
    cerrar = document.getElementById("cerrar");

abrir.addEventListener("click", () => {
    open.classList.add("active")
    conteiner.classList.add("active")
});
cerrar.addEventListener("click", () => {
    open.classList.remove("active")
    conteiner.classList.remove("active")


});



window.addEventListener((event) => {
    if (event.target == open) {
        open.visibility = "hidden";
    }
});
