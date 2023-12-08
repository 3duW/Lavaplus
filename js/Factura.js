document.getElementById('num_factura').value = 'L-' + generarNumeroAleatorio();

    function generarNumeroAleatorio() {
      return Math.floor(1000 + Math.random() * 9000);
    }

    document.getElementById('facturaForm').addEventListener('submit', function(event) {
      event.preventDefault();

      const formData = {
        cliente: document.getElementById('cliente').value,
        num_factura: document.getElementById('num_factura').value,
        monto: document.getElementById('monto').value,
        metodo_pago: document.getElementById('metodo_pago').value,
        fecha_emision: document.getElementById('fecha_emision').value
      };

      fetch('http://localhost:9000/api/fac', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        alert('Factura creada exitosamente');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Error al crear la factura');
      });
    });