import styles from "./Contato.module.css";

export function Contato() {
  return (
    <main className={styles.mainContato}>
      <section>
        <h1 className={styles.h1Contato}>
          Para quaisquer questões, envie-me um e-mail:
        </h1>
        <small className={styles.smallContato}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:figueiredocabralluizcarlos@gmail.com"
          >
            figueiredocabralluizcarlos@gmail.com
          </a>
        </small>
      </section>
    </main>
  );
}
