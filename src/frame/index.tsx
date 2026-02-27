import styles from "./style.module.css";

export function Frame() {
  return (
    <header className={`frame ${styles.frame}`}>
      <h1 className={styles.frame__title}>Yokesh Canvas</h1>
      <a className={styles.frame__back} href="https://tympanus.net/codrops/?p=106679">
        Article
      </a>
      <a className={styles.frame__archive} href="https://tympanus.net/codrops/hub/">
        All demos
      </a>
      <a className={styles.frame__github} href="https://github.com/edoardolunardi/infinite-canvas">
        GitHub
      </a>
      <div className={styles.frame__credits}>
        <span>By </span>
        <a href="https://www.edoardolunardi.dev/">Edoardo Lunardi</a>
      </div>
    </header>
  );
}
