import reactLogo from '../assets/react.svg'
import './navbar.css'
import { Link } from 'react-router-dom'
export default function Navbar(){
    return (
    <>
       <nav className="navbar">
      <div className="container-nav">
        <div className="logo">
        <img src={reactLogo} className="logo react" alt="React logo" />
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              
            </li>
            <li>
             <Link to ='/login'>Iniciar Sesion</Link>
            </li>
            <li>
              <Link to='register'>Registrarse</Link>
            </li>
            <li>
              About
            </li>
            <li>
              Contact
            </li>
          </ul>
        </div>
      </div>
    </nav>

    
    </>
    )
}