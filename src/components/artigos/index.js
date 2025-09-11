import { FaCalendar, FaDownload, FaRegCalendar } from "react-icons/fa";
import styles from "./artigos.module.css";

export default function Artigos() {
  return (
    <div className={styles.container}>
      <h2 className={styles.titleText}>Artigos</h2>
      <div className={styles.card}>
        <h3>Nome do artigo</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <span><FaRegCalendar />Data: 08/09/2025</span>
        <button className={styles.button}><FaDownload size={16} /> Baixar</button>
      </div>
    </div>
  );
}