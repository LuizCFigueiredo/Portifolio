import styles from './About.module.css';

export function About(){
    return(
        <main className={styles.mainAbout}>
            <section className={styles.SectionAbout}>
                <h1 className={styles.Sobre}>Sobre Mim</h1>
                <p className={styles.Desc}>Admirador da área de desenvolvimento web desde jovem, com paixão por resolver problemas complexos através da programação, brasileiro e nascido em 2002. 
                Sou estudante de analise e desenvolvimento de sistemas na Universidade Estácio de Sá. 
                Adoro desafios que me levam a adquirir novos conhecimentos e a encontrar soluções criativas para problemas complexos. 
                Além de ser uma pessoa curiosa e proativa, sempre em busca de novos conhecimentos e experiências. 
                Acredito que a colaboração e o aprendizado contínuo são essenciais para todo desenvolvedor.</p>
            </section>
        </main>
    )
}