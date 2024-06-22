import Foto from "../assets/Luiz.png";
import Projetos from "../components/Card/Projetos";
import SkillsList from "../components/Skills";
import styles from "../pages/Home.module.css";
import ComponentReact from "../assets/ComponentReact.svg";
import ComponentNodeJS from "../assets/ComponentNodeJS.svg";
import ComponentJS from "../assets/ComponentJS.svg";

function Home() {
  return (
    <main className={styles.MainHome}>
      <section id="inicio" className={styles.Container1}>
        <p className={styles.Text}>
          Olá 👋,
          <br />
          Meu nome é<br />
          <span>Luiz</span>
          <br />E construo coisas para a Web
        </p>
        <div className={styles.CFoto}>
          <img
            id={styles.Component}
            src={ComponentNodeJS}
            className={styles.ComponentNodeJS}
          ></img>
          <img
            id={styles.Component}
            src={ComponentJS}
            className={styles.ComponentJS}
          ></img>
          <img
            id={styles.Component}
            src={ComponentReact}
            className={styles.ComponentReact}
          ></img>
          <img src={Foto} className={styles.imagemPerfil}></img>
        </div>
      </section>
      <section id="skills" className={styles.Container2}>
        <h1>Skills</h1>
        <SkillsList />
      </section>
      <section id="projetos" className={styles.Container3}>
        <h1>Projetos</h1>
        <Projetos />
        <a rel="noopener noreferrer" href="#">
          <button className={styles.button}>
            <svg className={styles.svgIcon} viewBox="0 0 384 512">
              <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
            </svg>
          </button>
        </a>
      </section>
    </main>
  );
}

export default Home;
