const url_api = "http://localhost:9000/api/registros";

function validar() {
    if (!nombre.value ||  !telefono.value || !dni.value || !correo.value || !contrase.value) {
        alert('Por favor complete todos los campos.');
        return false;
    }
    return true;
}
function guardar() {
        if (!validar()) return;

    const data = {
        nombre: nombre.value,
        telefono: telefono.value,
        dni: dni.value,
        correo: correo.value,
        contrase: contraseña.value
    };

    axios.post(url_api, data)
        .then(function (response) {
            console.log(response.data);
            alert('Se registro con Exito.');
        })
        .catch(function (error) {
            console.error(error);
            alert('No se pudo registrar .');
        });
}



//esto es del menu responsive //
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");

});
