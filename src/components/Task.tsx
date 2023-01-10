import styles from "./Task.module.css";
import { Trash } from "./Trash";
import { ITask } from "./Tasks";

interface TaskProps {
  tasks: ITask[];
  setTask(toggleTask: ITask[]): void;
}

export function Task({ tasks, setTask }: TaskProps) {
  function handleToggleCompleteTask(id: string) {
    const toggleTask = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTask(toggleTask);
  }

  function handleDeletedTask(id: string) {
    const deletedTask = tasks.filter((task) => task.id !== id);
    setTask(deletedTask);
  }

  return (
    <>
      {tasks.map((task) => {
        let isCompleted;
        task.isCompleted
          ? (isCompleted = styles.completed)
          : (isCompleted = "");
        return (
          <div className={styles.task} key={task.id}>
            <div className={styles.customCheckbox}>
              <input
                type="checkbox"
                className={styles.checkbox}
                name="checkbox"
                id={task.id}
                onClick={() => handleToggleCompleteTask(task.id!)}
              />
              <label htmlFor={task.id}></label>
            </div>

            <div className={`${styles.taskText} ${isCompleted}`}>
              {task.title}
            </div>
            <Trash handleDeletedTask={handleDeletedTask} id={task.id!}/>
          </div>
        );
      })}
    </>
  );
}
