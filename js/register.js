const url_api = "http://localhost:9000/api/registros";


function guardar() {
    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const dni = document.getElementById("dni").value;
    const correo = document.getElementById("correo").value;
    const password = document.getElementById("password").value;
    
    const data = {
        nombre: nombre,
        telefono: parseInt(telefono),
        dni: parseInt(dni),
        Correo: correo,
        password: parseInt(dni),
       
    };

    axios.post(url_api, data)
        .then(function (response) {
            alert("¡El formulario fue enviado correctamente!");
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
