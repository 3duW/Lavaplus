// Función para mostrar el mensaje de error en la esquina
function mostrarError(mensaje) {
    const errorDiv = document.getElementById('error-message');
    errorDiv.textContent = mensaje;
    errorDiv.style.display = 'block'; 
    setTimeout(() => {
      errorDiv.style.display = 'none'; 
    }, 5000); 
  }

function mostrarExito(mensaje) {
    const successMessage = document.getElementById('success-message');
    successMessage.innerText = mensaje;
    successMessage.style.display = 'block';
    setTimeout(() => {
        successMessage.style.display = 'none'; 
    }, 3000); 
  }
//para dar funcionalidad al boton iniciar secion
document.getElementById('btnIniciarSesion').addEventListener('click', function() {
        const usuario = document.getElementById('correo').value;
        const contraseña = document.getElementById('password').value;
  
        // Objeto con los datos del usuario
        const datosUsuario = {
          correo: usuario,
          password: contraseña
        };
  
        const urlInicioSesion = 'http://localhost:9000/api/registros/login';
        axios.post(urlInicioSesion, datosUsuario)
          .then((respuesta) => {
            // Verificar si la respuesta indica que el inicio de sesión es exitoso
            if (respuesta.status === 200) {
                mostrarExito('Inicio de sesión exitoso');
              window.location.href = "./Delivery.html";
            } else {
                console.log('Inicio de sesión fallido');
                mostrarError('Inicio de sesión fallido. Verifica tus credenciales.');
            }
          })
          .catch((error) => {
            console.error('Error al iniciar sesión:', error);
            mostrarError('Error al iniciar sesión. Por favor, inténtalo de nuevo más tarde.');
          });
      });
 