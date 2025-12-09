import styles from './Lore.module.css'

const Lore = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lore of Hallownest</h1>
      <section className={styles.section}>
        <h2>The Pale King</h2>
        <p>
          The Pale King was a Wyrm who shed his shell to take the form of a bug. He granted sapience to the bugs of Hallownest and built the kingdom.
        </p>
      </section>
      <section className={styles.section}>
        <h2>The Radiance</h2>
        <p>
          A higher being of light, forgotten by the bugs when the Pale King arrived. She is the source of the Infection that plagues the kingdom.
        </p>
      </section>
      <section className={styles.section}>
        <h2>The Void</h2>
        <p>
          A substance found at the bottom of the Abyss. It is the enemy of light and was used by the Pale King to create the Vessels.
        </p>
      </section>
    </div>
  )
}

export default Lore