import styles from './Map.module.css'

const Map = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Map of Hallownest</h1>
      <div className={styles.mapPlaceholder}>
        <p>Map visualization would go here.</p>
        <div className={styles.areas}>
          <div className={styles.area}>Dirtmouth</div>
          <div className={styles.area}>Forgotten Crossroads</div>
          <div className={styles.area}>Greenpath</div>
          <div className={styles.area}>Fungal Wastes</div>
          <div className={styles.area}>City of Tears</div>
        </div>
      </div>
    </div>
  )
}

export default Map