import LogoBlack from "../../assets/LogoBlack.svg";
import styles from "./Footer.module.css";
import Git from "../../assets/gitCard.svg";
import Linkedin from "../../assets/linkedin.svg";
import Instagram from "../../assets/instagram.svg";

function Footer() {
  return (
    <footer className={styles.Footer}>
      <div alt="Contatos" className={styles.Contatos}>
        <img src={LogoBlack} alt="Minha logo" />
        <div className={styles.Lista}>
          <ul className={styles.contato}>
            <li className={styles.Contato}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://contate.me/luizdev"
              >
                +55 (83) 98193-1318
              </a>
            </li>
            <li className={styles.Contato}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:figueiredocabralluizcarlos@gmail.com"
              >
                figueiredocabralluizcarlos@gmail.com
              </a>
            </li>
          </ul>
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
      </div>
      <div className={styles.content}></div>
    </footer>
  );
}

export default Footer;
