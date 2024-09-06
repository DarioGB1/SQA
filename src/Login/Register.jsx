

export default function Register(params) {
    return  (
        <>
            <div className="container">
                <div className="logo-imdb">IMDb</div>
                <h2>Crear una nueva cuenta</h2>
                <form id="registerForm">
                        <label for="name">Nombre</label>
                        <input type="text" id="name" name="name" placeholder="Coloca tu nombre" required/>

                        <label for="email">Correo Electronico</label>
                        <input type="email" id="email" name="email" placeholder="Email" required/>

                        <label for="password">Contraseña</label>
                <input type="password" id="password" name="password" placeholder="Contraseña" required/>

                <label for="confirmPassword">Confirmar Contraseña</label>
                <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirmar Contraseña" required/>

                <input type="submit" value="Crear Cuenta"/>
                </form>
                <div class="new-to-imdb">
                Ya tienes cuenta? <a>Inicia Sesion en IMDb </a>
            </div>
            </div>
            
        </>
    )

}

