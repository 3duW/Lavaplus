const url_api = ENDPOINTS.cont;



function validar() {
    if (!nombre.value || !correo.value || !telefono.value || !dni.value || !direccion.value || !asunto.value) {
        alert('Por favor complete todos los campos.');
        return false;
    }
    return true;
}

function guardar() {
    if (!validar()) return;

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
            alert('Mensaje Enviado.');
        })
        .catch(function (error) {
            console.error(error);
            alert('Error al guardar el Mensaje.');
        });
        document.getElementById("contacForm").reset();
}



//esto es del menu responsive //
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");

});

