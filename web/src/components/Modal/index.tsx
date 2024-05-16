import { ReactNode } from 'react'
import style from './style.module.scss'
import { X } from '@phosphor-icons/react'

interface ModalProps {
  title: string
  isOpen: boolean
  children: ReactNode
  onClick: () => void
}

export default function Modal({isOpen, children, title, onClick} : ModalProps) {
  if (isOpen) {
    return (
      <div id={style.Modal}>
        <div className={style.content}>
          <div className={style.header}>
            <h2>{title}</h2>
            <button onClick={onClick}>
              <X weight='bold' size={32}/>
            </button>
          </div>
          {children}
        </div>
      </div>
    )
  }
}