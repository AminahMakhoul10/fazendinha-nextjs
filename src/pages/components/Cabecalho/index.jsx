import Image from "next/image";
import styles from "./styles.module.css";

export default function Cabecalho() {
  return (
    <>
    <header>
      <nav className={styles.nav}>
        <ul className={styles.containerLink}>
          <li><a href="#">Início</a></li>
          <li><a href="#">Produtos</a></li>
          <li><a href="#">Quem somos</a></li>
        </ul>
      </nav>
      
      <div className={styles.containerImage}>
        <div className={styles.containerTitle}>
          <p>Fazenda Orgânica</p>
        </div>
      </div>
    </header>
    </>
  )
}
