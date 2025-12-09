import { useParams, Link } from 'react-router-dom'
import { dadosPersonagens } from '../../data/charactersData'
import styles from './CharacterDetails.module.css'

const CharacterDetails = () => {
  const { id } = useParams()
  const personagem = dadosPersonagens.find(p => p.id === parseInt(id))

  if (!personagem) {
    return (
      <div className={styles.container}>
        <h2>Personagem não encontrado</h2>
        <Link to="/characters" className={styles.backButton}>Voltar</Link>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <Link to="/characters" className={styles.backButton}>← Voltar para Personagens</Link>
      
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img 
            src={personagem.imagem} 
            alt={personagem.titulo} 
            className={styles.image}
          />
        </div>
        
        <div className={styles.info}>
          <h1 className={styles.title}>{personagem.titulo}</h1>
          <span className={styles.type}>{personagem.tipo}</span>
          
          <div className={styles.section}>
            <h3>Descrição</h3>
            <p>{personagem.descricao}</p>
          </div>

          <div className={styles.section}>
            <h3>História</h3>
            <p>{personagem.historia}</p>
          </div>

          <div className={styles.section}>
            <h3>Localização</h3>
            <p>{personagem.localizacao}</p>
          </div>

          <div className={styles.section}>
            <h3>Habilidades</h3>
            <ul className={styles.abilitiesList}>
              {personagem.habilidades && personagem.habilidades.map((habilidade, index) => (
                <li key={index} className={styles.abilityTag}>{habilidade}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharacterDetails
