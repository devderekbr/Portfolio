import { Link } from 'react-router-dom'
import { profileData } from '../data/profileData'
import styles from './Profile.module.css'

const devInfo = profileData

export default function Profile() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link to="/" className={styles.back}>← Início</Link>
        <Link to="/login" className={styles.loginLink}>Entrar</Link>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.avatar}>
            {devInfo.name.charAt(0)}
          </div>
          <h1 className={styles.name}>{devInfo.name}</h1>
          <p className={styles.role}>{devInfo.role}</p>
          <p className={styles.bio}>{devInfo.bio}</p>
        </section>

        <section className={styles.section}>
          <h2>Contato</h2>
          <ul className={styles.contact}>
            <li>📧 {devInfo.email}</li>
            <li>📱 {devInfo.phone}</li>
            <li>📍 {devInfo.location}</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Habilidades</h2>
          <div className={styles.skills}>
            {devInfo.skills.map((skill) => (
              <span key={skill} className={styles.skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>Links</h2>
          <div className={styles.links}>
            {devInfo.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkBtn}
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
