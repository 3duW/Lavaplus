const url_api = "http://localhost:9000/api/deliv";

function listar() {
    axios.get(url_api)
    .then(function(response){
        console.log(response.data);
    })
    .catch(function (error) {
        console.error(error);
    });
}

function guardar() {
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;
    const dni = document.getElementById("dni").value;
    const direccion = document.getElementById("direccion").value;
    const distrito = document.getElementById("distrito").value;
    const tipoLavado = document.getElementById("lavado").value;
    const tipoPrenda = document.getElementById("prendas").value;
    const horaRecojo = document.getElementById("horaRecojo").value;
    const instrucciones = document.getElementById("instrucciones").value;

    const data = {
        Nombre: nombre,
        telefono: parseInt(telefono),
        Correo: correo,
        dni: parseInt(dni),
        distrito: distrito,
        tipo_servicio: tipoLavado,
        tipo_prenda: tipoPrenda,
        recojo: horaRecojo,
        direccion: direccion,
        comentario: instrucciones
    };

    axios.post(url_api, data)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.error(error);
        });
}

// Esto es del menú responsive
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});
