const url_api = "http://localhost:9000/api/promo"

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
}