import { Link } from "react-router-dom"
import header_logo from "../assets/logo1.png"

import "../styles/components/header.scss"

function Header() {
  return (
    <header>
      <div>
        <picture>
          <img src={header_logo} alt="Logo de Kasa" />
        </picture>
      </div>
      <nav>
        <div className="link-container">
          <Link to={"/"}>Accueil</Link>
        </div>
        <div className="link-container">
          <Link to={"/about"}>À propos</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header