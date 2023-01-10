import { useState, FormEvent, ChangeEvent } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./Tasks.module.css";
import { Counter } from "./Counter";
import { NewTask } from "./NewTask";
import { EmptyTask } from "./EmptyTask";
import { Task } from "./Task";

export interface ITask {
  id?: string;
  title: string;
  isCompleted: boolean;
}

export function Tasks() {
  const [task, setTask] = useState<ITask[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const taskLength = task.length;

  function handleFormSubmit(event: FormEvent) {
    event.preventDefault();
    if (!newTaskTitle) return;
    createNewTask();
  }

  function createNewTask() {
    const newTask: ITask = {
      id: uuidv4(),
      title: newTaskTitle,
      isCompleted: false,
    };

    setTask([...task, newTask]);
    setNewTaskTitle("");
    console.log("task created");
  }

  function handleNewTaskTextChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskTitle(event.target.value);
  }

  return (
    <>
      <NewTask
        newTaskTitle={newTaskTitle}
        onHandleFormSubmit={handleFormSubmit}
        onHandleNewTaskTextChange={handleNewTaskTextChange}
      />
      <div className={styles.tasksContainer}>
        <div className={styles.info}>
          <div className={styles.createdTasks}>
            Tarefas Criadas <Counter />
          </div>
          <div className={styles.completedTasks}>
            Concluídas <Counter />
          </div>
        </div>
        <div className={styles.taskListContainer}>
          {taskLength === 0 ? (
            <EmptyTask />
          ) : (
            <Task tasks={task} setTask={setTask} />
          )}
        </div>
      </div>
    </>
  );
}
