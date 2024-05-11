import { Trash } from "@phosphor-icons/react";
import styles from "./Task.module.css";
import { TTask } from "../../App";

type TaskProp = {
  dataTask: TTask;
  removeTask: (id: number) => void;
  changeMarkValue: (id: number) => void;
};

export function Task({ changeMarkValue, dataTask, removeTask }: TaskProp) {
  return (
    <li className={styles.container}>
      <div className={styles.checkbox}>
        <input
          type="checkbox"
          id={`checkbox-${dataTask.id}`}
          checked={dataTask.isFinished}
          onChange={() => changeMarkValue(dataTask.id)}
        />
        <label htmlFor={`checkbox-${dataTask.id}`}></label>
      </div>

      <span
        className={`${styles.taskText} ${
          dataTask.isFinished ? styles.taskTextRisk : ""
        }`}
      >
        {dataTask.task}
      </span>
      <button className={styles.button} onClick={() => removeTask(dataTask.id)}>
        <Trash size={16} />
      </button>
    </li>
  );
}
