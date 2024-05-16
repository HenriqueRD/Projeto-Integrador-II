import { User } from '@phosphor-icons/react'
import Header from '../../components/Header'
import style from './style.module.scss'
import ButtonSmall from '../../components/ButtonSmall'
import CardComment from '../../components/CardComment'

export default function Topic() {

  return (
    <>
      <Header isLogged />
      <div id={style.Topic}>
        <div className="container">
          <div className={style.content}>
            <div className={style.question}>
              <div className={style.header}>
                <div className={style.user}>
                  <User />
                  <div className={style.info}>
                    <span className={style.name}>Henrique R Dullius</span>
                    <span className={style.cat}>DIVERSOS</span>
                  </div>
                </div>
                <time>Públicado há 1h</time>
              </div>
              <div className={style.desc}>
                <h2>Botão de pesquisa para encontrar</h2>
                <p>A página do fórum pode ser proje naveguem pelos tópicos, façam perguntas, respondam a perguntas de outros morafdsdfsdores e participem de discussões. Aqui está um esboço básico da página do fórum:",
                </p>
              </div>
              <div className={style.answer}>
                <h3>Deixe seu comentário</h3>
                <form>
                  <textarea maxLength={350} placeholder='Escreva um comentário...' />
                  <footer>
                    <ButtonSmall className={style.button} type='submit' text='Publicar' />
                  </footer>
                </form>
              </div>
            </div>
            <div className={style.comments}>
              <CardComment createAt={Date()} name='Henrique R Dullius' desc='A página do fórum pode ser proje naveguem pelos tópicos, façam perguntas, respondam a perguntas de outros morafdsdfsdores e participem de discussões. Aqui está um esboço básico da página do fórum:",'/>
              <CardComment createAt={Date()} name='Henrique R Dullius' desc='A página do fórum pode ser proje naveguem pelos tópicos, façam perguntas, respondam a perguntas de outros morafdsdfsdores e participem de discussões. Aqui está um esboço básico da página do fórum:",'/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}