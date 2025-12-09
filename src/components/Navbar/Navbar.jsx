import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">Hollow Knight Wiki</Link>
      </div>
      <ul className={styles.navLinks}>
        <li><Link to="/" className={styles.link}>Home</Link></li>
        <li><Link to="/characters" className={styles.link}>Characters</Link></li>
        <li><Link to="/lore" className={styles.link}>Lore</Link></li>
        <li><Link to="/map" className={styles.link}>Map</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar