import styles from './Map.module.css'

const Map = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mapa de Hallownest</h1>
      <div className={styles.mapPlaceholder}>
        <p>A visualização do mapa ficaria aqui.</p>
        <div className={styles.areas}>
          <div className={styles.area}>Dirtmouth</div>
          <div className={styles.area}>Encruzilhada Esquecida</div>
          <div className={styles.area}>Caminho Verde</div>
          <div className={styles.area}>Ermos Fúngicos</div>
          <div className={styles.area}>Cidade das Lágrimas</div>
        </div>
      </div>
    </div>
  )
}

export default Map