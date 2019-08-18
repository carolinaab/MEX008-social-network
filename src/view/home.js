let Home = {
    render: async () => {
        let view = /* html */ ` 
        <div class ="content"
        <form>
        <textarea id="tex-post" cols="30" rows="10"></textarea>
        <button id="publicar"> publicar</button>
        </form>
        <ul id="tabla" class="tabla">
         <li> </li>
        </ul>
        </div>
        `
        return view
    },
    after_render: async () => {
        document.getElementById("publicar").addEventListener("click", addPost);
        // document.getElementById("borrar").addEventListener("click", deletePost);
    }
}
export default Home;