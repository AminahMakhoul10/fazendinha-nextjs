import styles from "./styles.module.css";

export default function Card({title,img,text}) {
  return (
    <>
    <div className={styles.containerCard}>
      <div className={styles.containerImage} style={{backgroundImage: `url(${img})`}}>
        <p>{title}</p>
      </div>
      <div className={styles.content}>
      <p>{text}</p>
      </div>
      <div className={styles.cardLink}>
        <a href="#">Saiba mais</a>
      </div>
    </div>
    </>
  )
}