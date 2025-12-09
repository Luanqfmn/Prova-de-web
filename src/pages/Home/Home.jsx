import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Welcome to Hallownest</h1>
        <p className={styles.subtitle}>Explore the depths of a ruined kingdom.</p>
      </div>
      <div className={styles.content}>
        <p>
          Hollow Knight is a classically styled 2D action adventure across a vast interconnected world.
          Explore twisting caverns, battle tainted creatures and befriend bizarre bugs, all in a classic, hand-drawn 2D style.
        </p>
        <p>
          This wiki is dedicated to providing information about the characters, lore, and world of Hollow Knight.
        </p>
      </div>
    </div>
  )
}

export default Home