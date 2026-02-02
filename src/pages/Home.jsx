import { Link } from 'react-router-dom'
import { profileData } from '../data/profileData'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <span className={styles.logo}>Portfólio</span>
        <Link to="/login" className={styles.loginLink}>Entrar</Link>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Olá, eu sou <span className={styles.highlight}>{profileData.name.split(' ')[0]}</span>
        </h1>
        <p className={styles.subtitle}>
          Este é meu espaço para mostrar projetos e conectar com quem busca talentos.
        </p>

        <div className={styles.actions}>
          <Link to="/perfil" className={styles.primaryBtn}>
            Ver meu perfil
          </Link>
          <span className={styles.or}>ou</span>
          <Link to="/login" className={styles.secondaryBtn}>
            Área restrita (upload de arquivos)
          </Link>
        </div>

        <p className={styles.hint}>
          Recrutadores: clique em <strong>Ver meu perfil</strong> para me conhecer.
        </p>
      </main>

      <footer className={styles.footer}>
        <Link to="/perfil">Perfil</Link>
        <Link to="/login">Login</Link>
      </footer>
    </div>
  )
}
