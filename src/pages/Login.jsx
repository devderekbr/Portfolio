import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import styles from './Login.module.css'

export default function Login() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    if (login(password)) {
      navigate('/dashboard')
    } else {
      setError('Senha incorreta. Tente novamente.')
    }
  }

  return (
    <div className={styles.page}>
      <Link to="/" className={styles.back}>← Voltar</Link>

      <div className={styles.card}>
        <h1 className={styles.title}>Área restrita</h1>
        <p className={styles.subtitle}>
          Faça login para enviar arquivos pelo site.
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
            className={styles.input}
            autoComplete="current-password"
          />
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit" className={styles.btn}>Entrar</button>
        </form>

        <p className={styles.demo}>
          Demo: use a senha <code>portfolio</code>
        </p>
      </div>
    </div>
  )
}
