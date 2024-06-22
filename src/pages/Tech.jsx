import styles from './Tech.module.css'
import Tail from '../assets/tailwind.svg'
import Next from '../assets/nextjs.svg'
import bs from '../assets/bootstrap.svg';
import dj from '../assets/django.svg';
import gh from '../assets/Github.svg';
import html from '../assets/html.svg';
import js from '../assets/js.svg';
import react from '../assets/React.svg';
import figma from '../assets/figma.svg';
import css from '../assets/css.svg';
import py from '../assets/python.svg';
import git from '../assets/git.svg';

export function Tech(){
    return(
        <main className={styles.mainTech}>
            <section className={styles.SectionTech}>
                <h1 className={styles.Stacks}>Minhas Stacks</h1>
                <div className={styles.content}>

                </div>
                <div className={styles.StackContent}>
                    <img src={bs}></img>
                    <img src={dj}></img>
                    <img src={gh}></img>
                    <img src={html}></img>
                    <img src={js}></img>
                    <img src={react}></img>
                    <img src={figma}></img>
                    <img src={css}></img>
                    <img src={py}></img>
                    <img src={git}></img>
                    <img src={Tail}></img>
                    <img src={Next}></img>
                </div>
            </section>
        </main>
    )
}