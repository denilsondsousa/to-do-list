import todoListLogo from "../../assets/logo.png";

import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todoListLogo} alt="Logotipo do todoList" />
    </header>
  );
}
