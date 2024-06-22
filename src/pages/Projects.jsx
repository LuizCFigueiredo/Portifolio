import styles from './Projects.module.css'
import MundoCripto from '../assets/MundoCripto.png';
import Tempo from "../assets/Tempo.png";
import CardProjetos from '../components/Card/CardProjetos'

export function Project(){
    return(
        <main className={styles.mainProject}>
            <section className={styles.SectionProject}>
                <h1 className={styles.Project}>Projetos</h1>
                <div className={styles.content}>

                </div>
                <div className={styles.divProjetos}>
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
                    <CardProjetos
                        img={MundoCripto}
                        Tittle="Projeto Mundo Cripto"
                        Descricao="Website completo de gerenciamento de criptomoedas com Node.js, React, APIs. 
                        Com recuperação de senha, navegação intuitiva e segurança robusta."
                        small="HTML, CSS, JavaScript, React, NodeJS"
                        a="https://github.com/LuizCFigueiredo/frontend-challenge"
                    />
                </div>
            </section>
        </main>
    )
}