import styles from './EmptyTask.module.css'
import clipboard from "../assets/Clipboard.svg";


export function EmptyTask() {
  return (
    <div className={styles.emptyList}>
      <img src={clipboard} className={styles.emptyListImg} />
      <div className={styles.emptyListText}>
        <div>Você ainda não tem tarefas cadastradas</div>
        <div>Crie tarefas e organize seus itens a fazer</div>
      </div>
    </div>
  );
}
