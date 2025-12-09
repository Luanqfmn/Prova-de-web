import styles from './Lore.module.css'

const Lore = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>História de Hallownest</h1>
      <section className={styles.section}>
        <h2>O Rei Pálido</h2>
        <p>
          O Rei Pálido era uma Wyrm que trocou sua casca para assumir a forma de um inseto. Ele concedeu senciência aos insetos de Hallownest e construiu o reino.
        </p>
      </section>
      <section className={styles.section}>
        <h2>A Radiância</h2>
        <p>
          Um ser superior de luz, esquecido pelos insetos quando o Rei Pálido chegou. Ela é a fonte da Infecção que assola o reino.
        </p>
      </section>
      <section className={styles.section}>
        <h2>O Vazio</h2>
        <p>
          Uma substância encontrada no fundo do Abismo. É o inimigo da luz e foi usado pelo Rei Pálido para criar os Receptáculos.
        </p>
      </section>
      <section className={styles.section}>
        <h2>Os Sonhadores</h2>
        <p>
          Monomon a Erudita, Lurien o Observador e Herrah a Besta. Três seres poderosos que se sacrificaram para se tornarem selos vivos no Templo do Ovo Negro, contendo a Infecção e a Radiância dentro dele.
        </p>
      </section>
      <section className={styles.section}>
        <h2>Os Cinco Grandes Cavaleiros</h2>
        <p>
          Os maiores campeões do Rei Pálido: Dryya a Feroz, Isma a Gentil, Hegemol o Poderoso, Ze'mer a Misteriosa e Ogrim o Leal. Eles defenderam Hallownest em sua era de ouro.
        </p>
      </section>
    </div>
  )
}

export default Lore