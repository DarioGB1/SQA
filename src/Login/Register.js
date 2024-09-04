document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío del formulario por defecto

    // Obtener los valores de los campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validaciones básicas
    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Puedes agregar validaciones adicionales aquí, como comprobar que el email tenga un formato válido

    // Si todo está bien, se puede enviar el formulario o realizar alguna acción
    alert('Form submitted successfully!');
    // Aquí podrías enviar el formulario a un servidor usando AJAX o fetch()
    // Por ahora, solo resetearemos el formulario
    document.getElementById('registerForm').reset();
});
