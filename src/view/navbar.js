let Navbar = {
    render : async () => {
        let view = /* html */ `
            <button id="close-sesion">Cierra Sesión</button>
        `
        return view
    },
    after_render : async () => {
        const singOff = () => {
            firebase.auth().signOut().then(function() {
                // Sign-out successful.
            })
            .then(() => {
                alert("Regresa pronto");
                location.hash = '/';
            })
            .catch(function(error) {
                alert("Vuelve a intentarlo");
                // An error happened.
            });
            
        }
        const closed = document.getElementById("close-sesion");
        closed.addEventListener("click", singOff);              
        

                
            }
}
export default Navbar;