const url_api = "http://localhost:9000/api/login";

function guardar() {
    const data = {
        correo: correo.value,
        contrase: contraseña.value
    };

    axios.post(url_api, data)
        .then(function (response) {
            console.log(response.data);
            alert('Correo enviado.');
        })
        .catch(function (error) {
            console.error(error);
            alert('Error al guardar el correo.');
        });
}
  
//Javascrip para Dispositivos moviles //

const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");

});