
import './login.css'
export default function Login(params) {
    return  (
        <>
            <div className="container">
                <div className="logo-imdb">IMDB</div>

                <form action="#" method="POST">
                    <input type="email" placeholder="Correo Electronico o Telefono" required/>
                    <input type="password" placeholder="Contraseña" required/>

                    <div class="forgot-password">
                        <a href="#">Olvidaste tu Contraseña?</a>
                    </div>

                    <input type="submit" value="Iniciar Sesion"></input>

                    <div class="keep-signed-in">
                        <input type="checkbox" id="keep-signed-in"/>
                        <label for="keep-signed-in">Mantener Sesion. <a href="#">Detalles</a></label>
                    </div>

                </form>
                <div class="new-to-imdb">
                    Eres Nuevo? <a href="C:\Users\dmc60\OneDrive\Desktop\Login IMDB\Login\Register.html">Crea tu cuenta en  IMDb </a>
                </div>
            </div>
        
        </>
    )
}