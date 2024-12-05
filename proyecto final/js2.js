function handleRegister() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (!name || !email || !username || !password || !confirmPassword) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Las claves no coinciden.');
        return;
    }

    // Aquí se puede realizar el envío al servidor
    console.log(`Registro exitoso: ${name}, ${email}, ${username}`);
    alert('Registro completado con éxito.');
}
