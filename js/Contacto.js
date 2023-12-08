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

    const datos = JSON.stringify({
        name: name.value, 
        correo: correo.value,
        telefono: telefono.value,
        dni: dni.value,
        direccion: direccion.value,
        asunto: asunto.value
    });
    console.log(datos)
    axios.post(url_api, datos, {
        headers: {
            'Content-Type': 'application/json'
        }    
    })
    .then(function (response) {
        console.log(datos)
    })
    .catch(function (error) {
        console.error(error);
})
}




//esto es del menu responsive //
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");

});

