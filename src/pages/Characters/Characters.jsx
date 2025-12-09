import Card from '../../components/Card/Card'
import styles from './Characters.module.css'

const dadosPersonagens = [
  {
    id: 1,
    titulo: 'O Cavaleiro',
    descricao: 'O protagonista de Hollow Knight. Um receptáculo do vazio, explorando Hallownest para descobrir seus segredos.',
    imagem: 'https://static.wikia.nocookie.net/hollowknight/images/4/47/The_Knight_Idle.png',
    tipo: 'Protagonista'
  },
  {
    id: 2,
    titulo: 'Hornet',
    descricao: 'A protetora das ruínas de Hallownest. Uma guerreira habilidosa que desafia o Cavaleiro.',
    imagem: 'https://static.wikia.nocookie.net/hollowknight/images/1/16/Hornet_Idle.png',
    tipo: 'Aliada/Chefe'
  },
  {
    id: 3,
    titulo: 'Quirrel',
    descricao: 'Um aventureiro curioso fascinado pelos mitos de Hallownest.',
    imagem: 'https://static.wikia.nocookie.net/hollowknight/images/e/ee/Quirrel-2.png',
    tipo: 'Aliado'
  },
  {
    id: 4,
    titulo: 'O Cavaleiro Vazio',
    descricao: 'O receptáculo escolhido para selar a infecção. Agora corrompido e selado dentro do Ovo Negro.',
    imagem: 'https://static.wikia.nocookie.net/hollowknight/images/1/12/B_Hollow_Knight.png',
    tipo: 'Chefe'
  }
]

const Personagens = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Personagens de Hallownest</h1>
      <div className={styles.grid}>
        {dadosPersonagens.map(personagem => (
          <Card 
            key={personagem.id}
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