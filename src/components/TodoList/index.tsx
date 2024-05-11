import { CategoriesCount } from "../CategoriesCount";

import styles from "./TodoList.module.css";
import { TodoListEmpty } from "../TodoListEmpty";
import { Task } from "../Task";
import { TTask } from "../../App";

type TodoListProps = {
  tasks: TTask[];
  removeTask: (id: number) => void;
  changeMarkValue: (id: number) => void;
};
export function TodoList({
  removeTask,
  changeMarkValue,
  tasks,
}: TodoListProps) {
  return (
    <div className={styles.container}>
      <CategoriesCount tasks={tasks} />
      <section className={styles.section}>
        {tasks.length ? (
          <ul className={styles.list}>
            {tasks.map((item, id) => (
              <Task
                key={id}
                dataTask={item}
                removeTask={removeTask}
                changeMarkValue={changeMarkValue}
              />
            ))}
          </ul>
        ) : (
          <TodoListEmpty />
        )}
      </section>
    </div>
  );
}
