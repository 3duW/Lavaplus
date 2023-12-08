const url_api = "http://localhost:9000/api/cont"

function listar() {
    axios.get(url_api)
    .then(function(response){
        console.log(response.data);
    })
    .catch(function (error) {
        console.error(error);
    })
}
function guardar() {
    const data = {
        name: nombre.value,
        correo: correo.value,
        telefono: telefono.value,
        dni: dni.value,
        direccion: direccion.value,
        asunto: asunto.value
    };

    axios.post(url_api, data)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.error(error);
        });
}



//esto es del menu responsive //
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");

});

