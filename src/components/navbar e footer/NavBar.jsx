import styles from "./NavBar.module.css";
import Logo from "../../assets/logo2.svg";
import Git from "../../assets/gitCard.svg";
import Linkedin from "../../assets/linkedin.svg";
import Instagram from "../../assets/instagram.svg";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header className={styles.HeaderNav}>
      <nav className={styles.Navbar}>
        <div className={styles.Logo}>
          <img src={Logo}></img>
        </div>
        <div className={styles.DivLista}>
          <div className={styles.Nav}>
            <ul className={styles.Lista}>
              <Link to="/home">
                <li>Home</li>
              </Link>
              <Link to="/sobre">
                <li>Sobre</li>
              </Link>
              <Link to="/stacks">
                <li>Tecnologias</li>
              </Link>
              <Link to="/projetos">
                <li>Projetos</li>
              </Link>
              <Link to="/contato">
                <li>Contato</li>
              </Link>
            </ul>
          </div>
          <div className={styles.redes}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/LuizCFigueiredo"
            >
              <img id="imgs" src={Git} alt="Meu GitHub"></img>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/luizc.f.c/"
            >
              <img id="imgs" src={Instagram} alt="Meu Instagram"></img>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/figueiredo-luiz/"
            >
              <img id="imgs" src={Linkedin} alt="Meu Linkedin"></img>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
