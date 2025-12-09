import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Bem-vindo a Hallownest</h1>
        <p className={styles.subtitle}>Explore as profundezas de um reino arruinado.</p>
      </div>
      <div className={styles.content}>
        <p>
          Hollow Knight é uma aventura de ação 2D de estilo clássico através de um vasto mundo interconectado.
          Explore cavernas sinuosas, lute contra criaturas corrompidas e faça amizade com insetos bizarros, tudo em um estilo clássico desenhado à mão.
        </p>
        <p>
          Esta wiki é dedicada a fornecer informações sobre os personagens, a história e o mundo de Hollow Knight.
        </p>
      </div>
    </div>
  )
}

export default Home