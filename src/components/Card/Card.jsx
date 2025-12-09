import styles from './Card.module.css'

const Card = ({ title, image, description, type }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {image ? <img src={image} alt={title} className={styles.image} /> : <div className={styles.placeholder}>No Image</div>}
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          {type && <span className={styles.type}>{type}</span>}
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}

export default Card