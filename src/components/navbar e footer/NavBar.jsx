import "./NavBar.css";
import Logo from "../../assets/logo2.svg";
import Git from "../../assets/gitCard.svg";
import Linkedin from "../../assets/linkedin.svg";
import Instagram from "../../assets/instagram.svg";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header className="ml-[1.26rem] min-h-2">
      <nav className="w-full h-7 flex flex-row items-center justify-around mt-1">
        <div className="imgCont">
          <img src={Logo}></img>
        </div>
        <div className="flex flex-row color">
          <ul className="list flex space-x-4 gap-1 ">
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
        <div className="redes">
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
      </nav>
    </header>
  );
}

export default NavBar;
