import Card from '../../components/Card/Card'
import styles from './Characters.module.css'
import { dadosPersonagens } from '../../data/charactersData'

const Personagens = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Personagens de Hallownest</h1>
      <div className={styles.grid}>
        {dadosPersonagens.map(personagem => (
          <Card 
            key={personagem.id}
            id={personagem.id}
            titulo={personagem.titulo}
            descricao={personagem.descricao}
            imagem={personagem.imagem}
            tipo={personagem.tipo}
          />
        ))}
      </div>
    </div>
  )
}

export default Personagens