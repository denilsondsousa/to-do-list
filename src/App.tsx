import { Header } from "./components/Header";
import styles from "./App.module.css";
import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";
import { useState } from "react";

export interface TTask {
  id: number;
  task: string;
  isFinished: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TTask[]>([]);

  const addTask = (newTask: string) => {
    if (newTask) {
      setTasks([
        { id: new Date().getTime(), task: newTask, isFinished: false },
        ...tasks,
      ]);
    }
  };

  const removeTask = (id: number) => {
    const updateItems = tasks.filter((item) => item.id !== id);

    setTasks(updateItems);
  };

  const changeMarkValue = (id: number) => {
    const updateItems = tasks.map((item) => {
      if (item.id === id) {
        return { ...item, isFinished: !item.isFinished };
      }

      return { ...item };
    });

    setTasks(updateItems);
  };

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <Form addTask={addTask} />
        <TodoList
          removeTask={removeTask}
          tasks={tasks}
          changeMarkValue={changeMarkValue}
        />
      </div>
    </div>
  );
}

export default App;
