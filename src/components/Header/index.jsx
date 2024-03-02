import { Link } from 'react-router-dom'
import '../../styles/Header.scss'
import logo from '../../assets/logo-kasa.svg'


function Header() {
    return (
        <header>
            <img src={logo} alt="logo du site" id = "logo"/>
            
            <nav className = "header__navbar">
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/À_propos">A propos</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header