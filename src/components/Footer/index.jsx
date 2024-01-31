import logo from '../../assets/logo-kasa.svg'
import '../../styles/Footer.scss'
import { MdOutlineCopyright } from "react-icons/md";

function Footer() {
    return (
        <footer>
        <img src={logo} alt="logo du site" />
        <p> <MdOutlineCopyright />2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer