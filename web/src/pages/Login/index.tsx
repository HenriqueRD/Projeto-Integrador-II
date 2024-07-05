import { FormEvent, useContext, useState } from 'react'
import './style.scss'
import Header from '../../components/Header'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import { AuthContext } from '../../contexts/AuthContext'

export default function Login() {
  const [ email, setEmail ] = useState('') 
  const [ password, setPassword ] = useState('')

  const auth = useContext(AuthContext)

  async function handleLogin(e : FormEvent) {
    e.preventDefault()
    await auth.signIn({email, password})
  }

  return (
    <>
      <Header />
      <div id='Login'>
        <div className='content'>
          <form onSubmit={handleLogin}>
            <div className="info">
              <h2>Acesse sua conta</h2>
            </div>
            <div className='box'>
              <label htmlFor="email">E-mail</label>
              <input required id="email" type="text" onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Seu email' />
            </div>
            <div className='box'>
              <label htmlFor="password">Senha</label>
              <input required id="password" type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Sua senha' />
            </div>
            <div className='box-2'>
              <Link to='/'>Esqueci minha senha</Link>
            </div>
            <div className='box'>
              <Button type='submit' text='Entrar' />
              <Link to='/registrar'>Cadastre-se</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}