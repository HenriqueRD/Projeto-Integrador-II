import { FormEvent, useState } from 'react'
import './style.scss'
import Header from '../../components/Header'
import { ArrowLeft } from '@phosphor-icons/react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/Button'

export default function Register() {
  const [ name, setName ] = useState('') 
  const [ phone, setPhone ] = useState(NaN) 
  const [ email, setEmail ] = useState('') 
  const [ password, setPassword ] = useState('')
  const navigate  = useNavigate()

  function handleRegister(e : FormEvent) {
    e.preventDefault()
    navigate('/')
  }

  return (
    <>
      <Header />
      <div id='Register'>
        <div className='content'>
          <form onSubmit={handleRegister}>
            <div className="info">
              <h2>Cadastre-se gratuitamente</h2>
            </div>
            <div className='box'>
              <label htmlFor="name">Nome</label>
              <input required id="name" type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder='Digite seu nome' />
            </div>
            <div className='box'>
              <label htmlFor="name">Celular:</label>
              <input required id="name" type="number" onChange={(e) => setPhone(Number(e.target.value))} value={phone} placeholder='Digite seu celular' />
            </div>
            <div className='box'>
              <label htmlFor="email">E-mail</label>
              <input required id="email" type="text" onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Digite seu e-mail' />
            </div>
            <div className='box'>
              <label htmlFor="password">Senha</label>
              <input required id="password" type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Digite sua senha' />
            </div>
            <div className='box'>
              <Button text='Cadastrar' />
            </div>
            <Link to='/' className='box-2'>
              <ArrowLeft size={28} weight='bold' />
              <span>Voltar para login</span>
            </Link>
          </form>
        </div>
      </div>
    </>
  )
}