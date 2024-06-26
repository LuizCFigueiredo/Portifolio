import Git from "../../assets/gitCard.svg";
import styles from "./CardProjetos.module.css";

const CardProjetos = ({ id, img, Tittle, Descricao, a, small }) => {
  return (
    <div className={styles.CardContainer}>
      <img src={img} alt={id} className={styles.imgContainer}></img>
      <div className={styles.CardDesc}>
        <div className={styles.TextCard}>
          <h1 className={styles.TittleCard}>{Tittle}</h1>
          <p className={styles.Descricao}>{Descricao}</p>
        </div>
        <div className={styles.Smaal}>
          <small>
            <span>Tech stack:</span> {small}
          </small>
        </div>
        <div className={styles.CodLink}>
          <img src={Git}></img>
          <a href={a} target="_blank" alt={id} className={styles.link}>
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardProjetos;
