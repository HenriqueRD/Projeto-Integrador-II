import { format, formatDistance, subDays } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { User } from '@phosphor-icons/react'
import style from './style.module.scss'

interface CardCommentProps {
  name: string
  desc: string
  createAt: string
}

export default function CardComment({desc, name, createAt} : CardCommentProps) {
   
  return (
    <div id={style.CardComment}>
      <div className={style.header}>
        <div className={style.info}>
          <div className={style.user}>
            <User />
            <span className={style.name}>{name}</span>
          </div>
          <time title={format(new Date(createAt), 'dd/MM/yyyy')} dateTime={format(new Date(createAt), 'dd/MM/yyyy')}>{formatDistance(subDays(new Date(createAt), 0), new Date(), {addSuffix: true, locale: ptBR})}</time>
        </div>
      </div>
      <p>{desc}</p>
    </div>
  )
}