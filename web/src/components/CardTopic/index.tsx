import { Chats, User } from '@phosphor-icons/react'
import { format, formatDistance, subDays } from 'date-fns'
import style from './style.module.scss'
import { ptBR } from 'date-fns/locale'
import { Link } from 'react-router-dom'

interface CardTopicProps {
  comments: number
  data: {
    id: number
    user: {
      name: string
    }
    category: string
    title: string
    description: string
    createdAt: string
  }
}

export default function CardTopic({data, comments} : CardTopicProps) {
  return (
    <div id={style.CardTopic}>
      <div className={style.header}>
        <div className={style.user}>
          <User />
          <div className={style.info}>
            <span className={style.name}>{data.user.name}</span>
            <span className={style.cat}>{data.category}</span>
          </div>
        </div>
        <time title={format(new Date(data.createdAt), 'dd/MM/yyyy')} dateTime={format(new Date(data.createdAt), 'dd/MM/yyyy')}>{formatDistance(subDays(new Date(data.createdAt), 0), new Date(), {addSuffix: true, locale: ptBR})}</time>
      </div>
      <div className={style.text}>
        <p className={style.title}>{data.title}</p>
        <p>{data.description}</p>
      </div>
      <div className={style.footer}>
        <div className={style.button}>
          <Link to={`/forum/${data.id}`}>Visualizar</Link>
        </div>
        <div className={style.comments}>
          <Chats size={22} />
          <span>{comments}</span>
        </div>
      </div>
    </div>
  )
}