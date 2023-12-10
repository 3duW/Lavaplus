const url_api = "http://localhost:9000/api/deliv";

function listar() {
    const resultadoDiv = document.getElementById("resultado");
    axios.get(url_api)
    .then(function(response){
        // Crear tabla y elementos de la tabla
        const tabla = document.createElement("table");
        const thead = document.createElement("thead");
        const tbody = document.createElement("tbody");

        // Encabezados de la tabla
        const encabezados = ["Nombre", "Teléfono", "Correo","dni", "distrito", 
        "tipo_servicio",  "tipo_prenda", "recojo","direccion", "comentario" ];

        // Crear fila de encabezados
        const encabezadosRow = document.createElement("tr");
        encabezados.forEach(encabezado => {
            const th = document.createElement("th");
            th.textContent = encabezado;
            encabezadosRow.appendChild(th);
        });
        thead.appendChild(encabezadosRow);

        // Datos de la tabla
        response.data.forEach(dato => {
            const fila = document.createElement("tr");

            // Crear celdas con los datos
            const celdaNombre = document.createElement("td");
            celdaNombre.textContent = dato.Nombre;
            const celdaTelefono = document.createElement("td");
            celdaTelefono.textContent = dato.telefono;
            const celdaCorreo = document.createElement("td");
            celdaCorreo.textContent = dato.Correo;
            const celdaDni = document.createElement("td");
            celdaDni.textContent = dato.dni;
            const celdaDistrito = document.createElement("td");
            celdaDistrito.textContent = dato.distrito;
            const celdaTipo_servicio = document.createElement("td");
            celdaTipo_servicio.textContent = dato.tipo_servicio;
            const celdaTipo_prenda = document.createElement("td");
            celdaTipo_prenda.textContent = dato.tipo_prenda;
            const celdaRecojo = document.createElement("td");
            celdaRecojo.textContent = dato.recojo;
            const celdaDireccion = document.createElement("td");
            celdaDireccion.textContent = dato.direccion;
            const celdaComentario = document.createElement("td");
            celdaComentario.textContent = dato.comentario;

            // aca se agrega las celdas a la fila
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

            // codigo para agregar las filas a la tabla
            tbody.appendChild(fila);
        });

        // se agrega thead y tbody 
        tabla.appendChild(thead);
        tabla.appendChild(tbody);

        // codigo para mostrar la tabla nueva y tambien limpia la tabla al mismo tiempo
        resultadoDiv.innerHTML = ""; 
        resultadoDiv.appendChild(tabla);
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
