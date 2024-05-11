import { PlusCircle } from "@phosphor-icons/react";

import styles from "./Form.module.css";
import { useState } from "react";

type FormProps = {
  addTask: (newTask: string) => void;
};
export function Form({ addTask }: FormProps) {
  const [inputText, setInputText] = useState("");

  return (
    <div className={styles.container}>
      <input
        placeholder="Adicione uma nova tarefa"
        className={styles.input}
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
      />

      <button
        className={styles.button}
        onClick={() => {
          addTask(inputText);
          setInputText("");
        }}
      >
        Criar
        <PlusCircle size={16} color="#ffffff" weight="bold" />
      </button>
    </div>
  );
}
