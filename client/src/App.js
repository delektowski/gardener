import GardnerForm from "./components/GardnerForm/GardnerForm";
import styles from './index.module.css'

function App() {
  return (
    <main className={styles.container}>
      <h1>Ogrodnik</h1>
      <GardnerForm />
    </main>
  );
}

export default App;
