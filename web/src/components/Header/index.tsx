import { Link } from 'react-router-dom'
import Logo from '../Logo'
import style from'./style.module.scss'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { Power, User } from '@phosphor-icons/react'
import ButtonSmall from '../ButtonSmall'

export default function Header() {
  
  const { user, isAuthenticated, logOut } = useContext(AuthContext)

  return (
    <div id={style.Header}>
      <div className='container'>
        <div className={style.content}>
          <Link to="/">
            <Logo />
          </Link>
          {
            isAuthenticated ? (
              <div className={style.isAuth}>
                <div className={style.nav}>
                  <Link to='/'>Home</Link>
                  <Link to='/forum'>Fórum</Link>
                  <Link to='/calendario'>Calendário</Link>
                  <Link to='/moradores'>Moradores</Link>
                </div>
                <div className={style.user}>
                  <User />
                  <div className={style.info}>
                    <strong>{user.name}</strong>
                    <button onClick={logOut}><Power size={16} />Sair</button>
                  </div>
                </div>
              </div>
            ) : (
              <Link to='/login'>
                <ButtonSmall type='button' text='Entrar' />
              </Link>
            )
          }
        </div>
      </div>
    </div>
  )
}