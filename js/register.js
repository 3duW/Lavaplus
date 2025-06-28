const url_api = ENDPOINTS.register;



function guardar() {
    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const dni = document.getElementById("dni").value;
    const correo = document.getElementById("correo").value;
    const password = document.getElementById("password").value;

        // Validar que los campos obligatorios no estén vacíos
        if (nombre.trim() === '' || telefono.trim() === '' || dni.trim() === '' || correo.trim() === '' || password.trim() === '') {
            alert('Por favor, complete todos los campos obligatorios.');
            return; 
        }
    
        // Validar el formato del DNI y del teléfono (puedes agregar más validaciones según tu necesidad)
        if (isNaN(parseInt(telefono)) || isNaN(parseInt(dni))) {
            alert('El DNI y el teléfono deben ser números válidos.');
            return; 
        }
    
        // Validar el formato del correo electrónico
        const correoRegex = /^\S+@\S+\.\S+$/;
        if (!correoRegex.test(correo)) {
            alert('Ingrese un correo electrónico válido.');
            return; 
        }
        
    
    const data = {
        nombre: nombre,
        telefono: parseInt(telefono),
        dni: parseInt(dni),
        correo: correo,
        password: password
       
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
