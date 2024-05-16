import { EnvelopeSimple, Phone, User } from '@phosphor-icons/react'
import { format } from 'date-fns'
import style from './style.module.scss'
import { ptBR } from 'date-fns/locale'

interface CardResidentProps {
  data: {
    id: number
    name: string
    phone: number
    email: string
    createdAt: Date
  }
}

export default function CardResident({data} : CardResidentProps) {
   
  return (
    <div id={style.CardResident}>
      <div className={style.header}>
        <div className={style.user}>
          <User />
          <div className={style.info}>
            <span className={style.name}>{data.name}</span>
            <span className={style.createdAt}>Perfil criado em {format(new Date(data.createdAt), "dd 'de' MMM 'de' yyyy", { locale: ptBR })}</span>
          </div>
        </div>
        <div className={style.details}>
          <div>
            <EnvelopeSimple size={20} />
            <span>{data.email}</span>
          </div>
          <div>
            <Phone size={20} />
            <span>{data.phone}</span>
          </div>
        </div>
      </div>
    </div>
  )
}