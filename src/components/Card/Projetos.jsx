import CardProjetos from "./CardProjetos";
import MundoCripto from '../../assets/MundoCripto.png';
import Tempo from "../../assets/Tempo.png";
import styles from "./Projetos.module.css";

function Projetos() {
  return (
    <div className={styles.ContainerCards}>
      <CardProjetos
        img={MundoCripto}
        Tittle="Projeto Mundo Cripto"
        Descricao="Website completo de gerenciamento de criptomoedas com Node.js, React, APIs. 
        Com recuperação de senha, navegação intuitiva e segurança robusta."
        small="HTML, CSS, JavaScript, React, NodeJS"
        a="https://github.com/LuizCFigueiredo/frontend-challenge"
      />
      <CardProjetos
        img={Tempo}
        Tittle="Projeto Seu tempo"
        Descricao="Website interativo de previsão do tempo com HTML, CSS e JavaScript. 
        Busca dados em tempo real de uma API e exibe resultados de forma clara e intuitiva."
        small="HTML, CSS, JavaScript"
        a="https://github.com/LuizCFigueiredo/TempoLocal"
      />
    </div>
  );
}

export default Projetos;
