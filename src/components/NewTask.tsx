import styles from "./NewTask.module.css";
import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent } from "react";

interface NewTaskProps {
  newTaskTitle: string;
  onHandleFormSubmit(event: FormEvent): void;
  onHandleNewTaskTextChange(event: ChangeEvent<HTMLInputElement>): void;
}

export function NewTask({
  newTaskTitle,
  onHandleFormSubmit,
  onHandleNewTaskTextChange,
}: NewTaskProps) {
  function handleFormSubmit(event: FormEvent) {
    onHandleFormSubmit(event);
  }

  function handleNewTaskTextChange(event: ChangeEvent<HTMLInputElement>) {
    onHandleNewTaskTextChange(event);
  }

  return (
    <form onSubmit={handleFormSubmit} className={styles.newTaskFormContainer}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={handleNewTaskTextChange}
        value={newTaskTitle}
      />
      <button>
        Criar <PlusCircle size={16} weight="bold" />
      </button>
    </form>
  );
}
