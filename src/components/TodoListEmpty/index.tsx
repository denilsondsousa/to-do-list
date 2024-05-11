import { ClipboardText } from "@phosphor-icons/react";
import styles from "./TodoList.module.css";

export function TodoListEmpty() {
  return (
    <div className={styles.emptyWrapper}>
      <ClipboardText size={56} className={styles.icon} />
      <div className={styles.textEmptyContainer}>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  );
}
