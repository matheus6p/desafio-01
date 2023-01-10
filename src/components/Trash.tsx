import trash from "../assets/trash.svg";
import styles from "./Trash.module.css";

interface TrashProps {
  id: string;
  handleDeletedTask: (id: string) => void;
}

export function Trash({ id, handleDeletedTask }: TrashProps) {
  return (
    <img className={styles.trash} src={trash} onClick={() => handleDeletedTask(id)} />
  );
}
