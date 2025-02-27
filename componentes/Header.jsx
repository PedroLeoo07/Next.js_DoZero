import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        Sejam Bem vindos ao meu next do 0 <a href="">😀</a>
      </h1>
    </header>
  );
}