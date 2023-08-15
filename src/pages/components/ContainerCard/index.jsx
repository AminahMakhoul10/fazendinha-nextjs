import styles from "./styles.module.css";

export default function ContainerCard({children}) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}