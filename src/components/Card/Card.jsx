import { Link } from 'react-router-dom'
import styles from './Card.module.css'

const Card = ({ id, titulo, imagem, descricao, tipo }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {imagem ? <img src={imagem} alt={titulo} className={styles.image} /> : <div className={styles.placeholder}>Sem Imagem</div>}
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{titulo}</h3>
          {tipo && <span className={styles.type}>{tipo}</span>}
        </div>
        <p className={styles.description}>{descricao}</p>
        <Link to={`/characters/${id}`} className={styles.detailsButton}>
          Ver Detalhes
        </Link>
      </div>
    </div>
  )
}

export default Card