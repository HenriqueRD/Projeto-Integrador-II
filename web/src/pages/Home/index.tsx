import Header from '../../components/Header'
import './style.scss'
import banner from '../../../src/assest/banner.png'
import Logo from '../../components/Logo'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

export default function Home() {
  
  const { user, isAuthenticated } = useContext(AuthContext)

  return (
    <>
      <Header />
      <div id='Home'>
        <div className="container">
          <div className="content">
            <div className='info'>
              <div>
                <h1>Bem-vindo ao <Logo /></h1>
                <p>Bem-vindo ao coração digital da nossa vizinhança! Aqui, cada voz é ouvida e cada evento é celebrado. Somos uma comunidade unida, comprometida em fortalecer os laços entre os moradores e tornar nosso condomínio/bairro um lugar ainda mais acolhedor e vibrante para todos.</p>
                <p>No nosso espaço digital, oferecemos uma variedade de funcionalidades projetadas para promover a participação, a colaboração e o engajamento de todos os membros da comunidade:</p>
              </div>
              <img src={banner} />
            </div>
            <div className="info-list">
              <ul>
                <li><strong>- Fórum:</strong> Participe de discussões construtivas, compartilhe ideias e resolva problemas juntos como uma comunidade unida, explore tópicos importantes para a nossa comunidade e contribua com as suas opiniões e ideias.</li>
                <li><strong>- Calendário de Eventos:</strong> Participe de discussões construtivas, compartilhe ideias e resolva problemas juntos como uma comunidade unida.</li>
                <li><strong>- Agendar Eventos:</strong> Marque reuniões, celebrações e eventos especiais no nosso calendário compartilhado.</li>
                <li><strong>- Conexão Social:</strong> Conheça seus vizinhos, compartilhe recursos e promova um ambiente amigável e solidário entre todos.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}