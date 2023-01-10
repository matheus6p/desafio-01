import styles from "./App.module.css";
import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { Tasks } from "./components/Tasks";
import "./global.css";

function App() {
  return (
    <>
      <Header />
      
      <Tasks />
    </>
  );
}

export default App;
