import { TTask } from "../../App";
import styles from "./CategoriesCount.module.css";

type CategoriesCountProps = {
  tasks: TTask[];
};

export function CategoriesCount({ tasks }: CategoriesCountProps) {
  const totalTasksFinished = tasks.reduce((prevValue, currentValue) => {
    if (currentValue.isFinished) {
      return prevValue + 1;
    }
    return prevValue;
  }, 0);
  return (
    <div className={styles.container}>
      <div className={styles.category}>
        <strong>Tarefas criadas</strong>
        <span>{tasks.length}</span>
      </div>

      <div className={styles.category}>
        <strong>Concluídas</strong>
        <span>
          {totalTasksFinished} de {tasks.length}
        </span>
      </div>
    </div>
  );
}
