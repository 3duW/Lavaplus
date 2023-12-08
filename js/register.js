const url_api = "http://localhost:9000/api/registros"

function validar() {
    if (!nombres.value || !telefono.value || !dni.value || !correo.value || !contarseña.value) {
        alert('Por favor complete todos los campos.');
        return false;
    }
    return true;
}

function guardar() {
    if (!validar()) return;

    const data = {
        nombre: nombres.value,
        telefono: telefono.value,
        dni: dni.value,
        correo: correo.value,
        contraseña: contraseña.value
        
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
}



//esto es del menu responsive //
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");

});
