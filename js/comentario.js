const url_api = "http://localhost:9000/api/comentarios";
const comentariosContainer = document.getElementById("comentariosContainer");

function listar() {
    axios.get(url_api)
        .then(function (response) {
            const comentarios = response.data;

            // Clear existing comments
            comentariosContainer.innerHTML = "";

            // Display each comment in a separate box
            comentarios.forEach((comentario) => {
                const commentBox = document.createElement("div");
                commentBox.classList.add("comment-box");
                commentBox.innerHTML = `
                    <p>Cliente: ${comentario.cliente}</p>
                    <p>Fecha: ${comentario.fecha}</p>
                    <p>Calificación: ${comentario.calificacion}</p>
                    <p>Comentario: ${comentario.comentario}</p>
                `;
                comentariosContainer.appendChild(commentBox);
            });

            // Mostrar el contenedor de comentarios
            comentariosContainer.style.display = 'flex';
        })
        .catch(function (error) {
            console.error(error);
            alert('No se pudo obtener la lista de comentarios');
        });
}
