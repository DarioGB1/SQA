// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar el formulario
    const form = document.querySelector("form");

    // Agregar un evento de escucha para el envío del formulario
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita el envío del formulario

        // Obtener los valores de los campos de entrada
        const emailOrPhone = form.querySelector("input[type='email']").value;
        const password = form.querySelector("input[type='password']").value;

        // Validar los campos de entrada
        if (validateInputs(emailOrPhone, password)) {
            // Si la validación es exitosa, realizar la acción de inicio de sesión
            loginUser(emailOrPhone, password);
        } else {
            // Si la validación falla, mostrar un mensaje de error
            alert("Please enter valid email/phone and password.");
        }
    });
});

// Función para validar los campos de entrada
function validateInputs(emailOrPhone, password) {
    // Comprobar si el campo de email o teléfono no está vacío
    if (!emailOrPhone) {
        return false;
    }

    // Comprobar si la contraseña tiene al menos 8 caracteres
    if (password.length < 8) {
        return false;
    }

    return true;
}

// Función simulada para iniciar sesión
function loginUser(emailOrPhone, password) {
    // Aquí puedes agregar la lógica para autenticar al usuario
    // Por ejemplo, podrías hacer una petición AJAX a un servidor

    // Simulación de inicio de sesión exitoso
    console.log("Logging in with:", emailOrPhone, password);
    alert("Login successful!");
}
