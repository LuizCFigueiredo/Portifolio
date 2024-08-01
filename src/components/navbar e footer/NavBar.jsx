import { useState } from "react";
import styles from "./NavBar.module.css";
import Logo from "../../assets/logo2.svg";
import Git from "../../assets/gitCard.svg";
import Linkedin from "../../assets/linkedin.svg";
import Instagram from "../../assets/instagram.svg";
import { Link } from "react-router-dom";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.HeaderNav}>
      <nav className={styles.Navbar}>
        <div className={styles.Logo}>
          <img src={Logo} alt="Logo" />
        </div>

        {/* Botão Hamburger */}
        <button
          className={`${styles.burger} ${isMenuOpen ? "open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menu (visível em telas maiores ou quando o menu estiver aberto) */}
        <div className={`${styles.DivLista} ${isMenuOpen ? styles.open : ""}`}>
          <div className={styles.Nav}>
            <ul className={styles.Lista}>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/sobre">Sobre</Link>
              </li>
              <li>
                <Link to="/stacks">Tecnologias</Link>
              </li>
              <li>
                <Link to="/projetos">Projetos</Link>
              </li>
              <li>
                <Link to="/contato">Contato</Link>
              </li>
            </ul>
          </div>
          <div className={styles.redes}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/LuizCFigueiredo"
            >
              <img id="imgs" src={Git} alt="Meu GitHub" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/luizc.f.c/"
            >
              <img id="imgs" src={Instagram} alt="Meu Instagram" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/figueiredo-luiz/"
            >
              <img id="imgs" src={Linkedin} alt="Meu Linkedin" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
