import styles from './Navigation.module.css'

export default function Navigation({ scrolled }) {
  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#hero" className={styles.logo}>
          <span className={styles.bracket}>{'<'}</span>
          KA
          <span className={styles.bracket}>{'/>'}</span>
        </a>

        <ul className={styles.menu}>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}
