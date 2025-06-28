const url_api = ENDPOINTS.fac;


function guardar() {
  const data = {
      cliente: nombre.value,
      num_factura: num_factura.value,
      servicio : lavado.value,
      monto: monto.value,
      metodo_pago: metodo_pago.value,
      fecha_emision: fecha_emision.value
    };

    axios.post(url_api, data)
        .then(function (response) {
            console.log(response.data);
            alert('Registro de Pago Enviado.');
        })
        .catch(function (error) {
            console.error(error);
            alert('Error al guardar el registro.');
        });
    document.getElementById("facturaForm").reset();
}
function actualizarMonto() {
  var lavadoSeleccionado = document.getElementById("lavado").value;
  var montoInput = document.getElementById("monto");

  // Lógica para actualizar el monto según el tipo de lavado seleccionado
  switch (lavadoSeleccionado) {
      case "lavado de Edredon":
          montoInput.value = 10; // Puedes ajustar este valor según tus tarifas
          break;
      case "lavado frazadas":
          montoInput.value = 14; // Puedes ajustar este valor según tus tarifas
          break;  
      case "lavado alfombras":
          montoInput.value = 17;
          break;
      case "lavado ternos":
          montoInput.value = 12;
          break;
      case "lavado ropa de bebes":
          montoInput.value = 8;
          break;
      case "lavado de casacas":
          montoInput.value = 20;
          break;
      default:
          montoInput.value = 0; // Valor predeterminado o manejo de error
  }

  // Actualizar el número de factura después de establecer el monto
  document.getElementById('num_factura').value = 'L-' + generarNumeroAleatorio();
}

function generarNumeroAleatorio() {
  return Math.floor(1 + Math.random() * 200);
}

// Llamar a la función inicialmente para establecer el monto y el número de factura predeterminados
actualizarMonto();