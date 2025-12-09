import Card from '../../components/Card/Card'
import styles from './Characters.module.css'

const charactersData = [
  {
    id: 1,
    title: 'The Knight',
    description: 'The protagonist of Hollow Knight. A vessel of void, exploring Hallownest to uncover its secrets.',
    image: 'https://static.wikia.nocookie.net/hollowknight/images/4/47/The_Knight_Idle.png/revision/latest?cb=20190618162622',
    type: 'Protagonist'
  },
  {
    id: 2,
    title: 'Hornet',
    description: 'The protector of Hallownest\'s ruins. A skilled warrior who challenges the Knight.',
    image: 'https://static.wikia.nocookie.net/hollowknight/images/1/16/Hornet_Idle.png/revision/latest?cb=20251030203109',
    type: 'Ally/Boss'
  },
  {
    id: 3,
    title: 'Quirrel',
    description: 'An inquisitive adventurer fascinated by the myths of Hallownest.',
    image: 'https://static.wikia.nocookie.net/hollowknight/images/e/ee/Quirrel-2.png/revision/latest?cb=20180829023414',
    type: 'Ally'
  },
  {
    id: 4,
    title: 'The Hollow Knight',
    description: 'The vessel chosen to seal away the infection. Now corrupted and sealed within the Black Egg.',
    image: 'https://static.wikia.nocookie.net/hollowknight/images/1/12/B_Hollow_Knight.png/revision/latest?cb=20170412204859',
    type: 'Boss'
  }
]

const Characters = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Characters of Hallownest</h1>
      <div className={styles.grid}>
        {charactersData.map(char => (
          <Card 
            key={char.id}
            title={char.title}
            description={char.description}
            image={char.image}
            type={char.type}
          />
        ))}
      </div>
    </div>
  )
}

export default Characters