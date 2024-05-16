import { Link } from 'react-router-dom'
import Logo from '../Logo'
import './style.scss'

interface HeaderProps {
  isLogged?: boolean
}

export default function Header({isLogged} : HeaderProps) {
   
  return (
    <div id='Header'>
      <div className='container'>
        <div className="content">
          <Logo />
          {
            isLogged && (
              <div className='nav'>
                <Link to='/home'>Home</Link>
                <Link to='/forum'>Fórum</Link>
                <Link to='/calendario'>Calendário</Link>
                <Link to='/moradores'>Moradores</Link>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}