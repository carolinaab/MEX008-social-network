let Home = {
    render: async () => {
        let view = /* html */ ` 
        <textarea id="tex-post" cols="30" rows="10"></textarea>
        <button id="publicar"> publicar</button>
         <table>
         <thead>
          <tr>
          <th>lo nuevo</th>
          </tr>
        </thead>
       <tbody id="tabla">
        </tbody>
        </table>

        `
        return view
    },
    after_render: async () => {
        document.getElementById("publicar").addEventListener("click", addPost)
    }
}
export default Home;