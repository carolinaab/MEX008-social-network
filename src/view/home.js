let Home = {
    render: async () => {
        let view = /* html */ `
        <textarea id="tex-post" cols="30" rows="10"></textarea>
        <button id="publicar"> publicar</button>
        <tbody id="tabla">
        </tbody>
        `
        return view
    },
    after_render: async () => {
        document.getElementById("publicar").addEventListener("click", addPost)
    }
}
export default Home;