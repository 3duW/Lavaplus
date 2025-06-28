const url_api = ENDPOINTS.promociones;


function guardar() {
 
    const data = {
        correo: correo.value
    };

  
    axios.post(url_api, data)
        .then(function (response) {
            
            console.log(response.data);
            alert('correo Enviado.');
        })
        .catch(function (error) {
            console.error(error);
            alert('Error al guardar el correo.');
        });
    document.getElementById("promForm").reset();
}