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
import styles from '../components/Skills.module.css';

function SkillsList(){
    return(
        <div className={styles.ContainerSkills}>
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
        </div>
    )
}

export default SkillsList;