const url_api = "http://localhost:9000/api/deliv";

document.getElementById("buscarClienteForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const dniCliente = document.getElementById("dniBuscar").value;

    mostrarClientePorDNI(dniCliente);
});

function mostrarClientePorDNI(dniBuscado) {
    const resultadoDiv = document.getElementById("resultado");
    axios.get(url_api)
    .then(function(response){
        console.log(response.data); // Revisemos los datos recibidos en la consola

        const clienteEncontrado = response.data.find(cliente => cliente.dni.toString() === dniBuscado);

        if (clienteEncontrado) {
            const tabla = document.createElement("table");
            const thead = document.createElement("thead");
            const tbody = document.createElement("tbody");

            const encabezados = ["Nombre", "Teléfono", "Correo","dni", "distrito", 
        "tipo_servicio",  "tipo_prenda", "recojo","direccion", "comentario" ];
            const encabezadosRow = document.createElement("tr");
            encabezados.forEach(encabezado => {
                const th = document.createElement("th");
                th.textContent = encabezado;
                encabezadosRow.appendChild(th);
            });
            thead.appendChild(encabezadosRow);

            const fila = document.createElement("tr");

            const celdaNombre = document.createElement("td");
            celdaNombre.textContent = clienteEncontrado.Nombre;
            const celdaTelefono = document.createElement("td");
            celdaTelefono.textContent = clienteEncontrado.telefono;
            const celdaCorreo = document.createElement("td");
            celdaCorreo.textContent = clienteEncontrado.Correo;
            const celdaDni = document.createElement("td");
            celdaDni.textContent = clienteEncontrado.dni;
            const celdaDistrito = document.createElement("td");
            celdaDistrito.textContent = clienteEncontrado.distrito;
            const celdaTipo_servicio = document.createElement("td");
            celdaTipo_servicio.textContent = clienteEncontrado.tipo_servicio;
            const celdaTipo_prenda = document.createElement("td");
            celdaTipo_prenda.textContent = clienteEncontrado.tipo_prenda;
            const celdaRecojo = document.createElement("td");
            celdaRecojo.textContent = clienteEncontrado.recojo;
            const celdaDireccion = document.createElement("td");
            celdaDireccion.textContent = clienteEncontrado.direccion;
            const celdaComentario = document.createElement("td");
            celdaComentario.textContent = clienteEncontrado.comentario;

            fila.appendChild(celdaNombre);
            fila.appendChild(celdaTelefono);
            fila.appendChild(celdaCorreo);
            fila.appendChild(celdaDni);
            fila.appendChild(celdaDistrito);
            fila.appendChild(celdaTipo_servicio);
            fila.appendChild(celdaTipo_prenda);
            fila.appendChild(celdaRecojo);
            fila.appendChild(celdaDireccion);
            fila.appendChild(celdaComentario);

            tbody.appendChild(fila);

            tabla.appendChild(thead);
            tabla.appendChild(tbody);

            resultadoDiv.innerHTML = "";
            resultadoDiv.appendChild(tabla);
        } else {
            resultadoDiv.innerHTML = "Cliente no encontrado";
        }
    })
    .catch(function (error) {
        console.error(error);
    });
}


function guardar() {
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;
    const dni = document.getElementById("dni").value;
    const direccion = document.getElementById("direccion").value;
    const distrito = document.getElementById("distrito").value;
    const tipoLavado = document.getElementById("lavado").value;
    const tipoPrenda = document.getElementById("prendas").value;
    const horaRecojo = document.getElementById("horaRecojo").value;
    const instrucciones = document.getElementById("instrucciones").value;

        // Realizar las validaciones aquí antes de enviar la solicitud POST
        if (nombre.trim() === '' || correo.trim() === '' || telefono.trim() === '' || dni.trim() === '' 
        || direccion.trim() === '' || distrito.trim() === '' || tipoLavado.trim() === ''
        || tipoPrenda.trim() === '' || horaRecojo.trim() === '' || instrucciones.trim() === '') {
            alert('Por favor, complete todos los campos.');
            return; 
        }
    
        if (isNaN(parseInt(telefono)) || isNaN(parseInt(dni))) {
            alert('El teléfono y el DNI deben ser números válidos.');
            return; 
        }
    
        const correoRegex = /^\S+@\S+\.\S+$/;
        if (!correoRegex.test(correo)) {
            alert('Ingrese un correo electrónico válido.');
            return; 
        }
    

    const data = {
        Nombre: nombre,
        telefono: parseInt(telefono),
        Correo: correo,
        dni: parseInt(dni),
        distrito: distrito,
        tipo_servicio: tipoLavado,
        tipo_prenda: tipoPrenda,
        recojo: horaRecojo,
        direccion: direccion,
        comentario: instrucciones
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

// Esto es del menú responsive
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});
