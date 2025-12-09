import styles from './Map.module.css'

const Map = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mapa de Hallownest</h1>
      <div className={styles.mapContainer}>
        <img 
          src="https://scripterswarmap.b-cdn.net/hk/HollowKnightMap_by_RainingChain.png?v=1" 
          alt="Mapa completo de Hallownest" 
          className={styles.mapImage}
        />
      </div>
    </div>
  )
}

export default Map