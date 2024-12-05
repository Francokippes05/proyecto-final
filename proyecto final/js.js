function handleLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Por favor, complete todos los campos.');
        return;
    }

    // Aquí puedes agregar la lógica de validación o envío al servidor
    console.log(`Usuario: ${username}, Clave: ${password}`);
    alert('Inicio de sesión exitoso'); // Puedes personalizar esto según la respuesta.
}
