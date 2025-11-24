import { useState } from 'react'
import styles from './Navigation.module.css'

export default function Navigation({ scrolled }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#hero" className={styles.logo}>
          <span className={styles.bracket}>{'<'}</span>
          KA
          <span className={styles.bracket}>{'/>'}</span>
        </a>

        <button
          className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        <ul className={`${styles.menu} ${isMobileMenuOpen ? styles.open : ''}`}>
          <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
          <li><a href="#experience" onClick={() => setIsMobileMenuOpen(false)}>Experience</a></li>
          <li><a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a></li>
          <li><a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>Skills</a></li>
          <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}
