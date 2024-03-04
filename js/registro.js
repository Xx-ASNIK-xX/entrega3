// Array para almacenar los usuarios registrados
// const usuariosRegistrados = []; No es necesario ya que ya lo tienes en usuariosRegistrados.js
import { usuariosRegistrados, agregarUsuario } from './usuariosRegistrados.js';

function validarRegistro(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validar el correo electrónico
    const emailError = document.getElementById('emailError');
    if (!email || !email.includes('@')) {
        emailError.textContent = 'Por favor, introduce un correo electrónico válido.';
        return;
    } else {
        emailError.textContent = '';
    }

    // Validar el nombre de usuario
    const usernameError = document.getElementById('usernameError');
    if (!username) {
        usernameError.textContent = 'Por favor, introduce un nombre de usuario.';
        return;
    } else {
        usernameError.textContent = '';
    }

    // Validar la contraseña
    const passwordError = document.getElementById('passwordError');
    if (!password || password.length < 6) {
        passwordError.textContent = 'La contraseña debe tener al menos 6 caracteres.';
        return;
    } else {
        passwordError.textContent = '';
    }

    // Verificar si el usuario ya está registrado
    const usuarioExistente = usuariosRegistrados.find(usuario => usuario.username === username);
    if (usuarioExistente) {
        alert('El nombre de usuario ya está en uso. Por favor, elige otro.');
        return;
    }

    // Crear un objeto usuario con los datos del formulario
    const nuevoUsuario = {
        email: email,
        username: username,
        password: password
    };

    // Almacenar el nuevo usuario en el array
    usuariosRegistrados.push(nuevoUsuario);

    // Mostrar mensaje de éxito
    alert('¡Registro exitoso! Ahora puedes iniciar sesión.');

    // Limpiar el formulario de registro
    document.getElementById('registroForm').reset();

    // Redirigir a la página de login
    window.location.href = '../pages/login.html';
}

// Agregar evento submit al formulario
document.getElementById('registroForm').addEventListener('submit', validarRegistro);