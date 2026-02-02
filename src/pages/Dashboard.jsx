import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import styles from './Dashboard.module.css'

export default function Dashboard() {
  const { logout } = useAuth()
  const navigate = useNavigate()
  const [file, setFile] = useState(null)
  const [message, setMessage] = useState('')

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const handleFileChange = (e) => {
    const selected = e.target.files?.[0]
    if (selected) {
      setFile(selected)
      setMessage('')
    }
  }

  const handleUpload = (e) => {
    e.preventDefault()
    if (!file) {
      setMessage('Selecione um arquivo.')
      return
    }
    // Demo: apenas simula sucesso. Em produção, enviaria para um backend.
    setMessage(`Arquivo "${file.name}" selecionado. Em produção, seria enviado ao servidor.`)
    setFile(null)
    e.target.reset()
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link to="/" className={styles.logo}>Portfólio</Link>
        <div className={styles.nav}>
          <Link to="/perfil">Meu perfil</Link>
          <button type="button" onClick={handleLogout} className={styles.logout}>
            Sair
          </button>
        </div>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>Enviar arquivo</h1>
        <p className={styles.subtitle}>
          Envie um arquivo diretamente pelo site (área restrita).
        </p>

        <form onSubmit={handleUpload} className={styles.form}>
          <label htmlFor="file" className={styles.label}>
            Escolher arquivo
          </label>
          <input
            id="file"
            type="file"
            onChange={handleFileChange}
            className={styles.fileInput}
          />
          {file && (
            <p className={styles.fileName}>
              Selecionado: {file.name} ({(file.size / 1024).toFixed(1)} KB)
            </p>
          )}
          {message && (
            <p className={styles.message}>{message}</p>
          )}
          <button type="submit" className={styles.btn}>Enviar</button>
        </form>
      </main>
    </div>
  )
}
