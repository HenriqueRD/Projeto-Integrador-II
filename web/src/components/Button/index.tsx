import { ButtonHTMLAttributes } from 'react'
import style from './style.module.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string
  isPrimary?: boolean
}

export default function Button({isPrimary = true, text, ...rest} : ButtonProps) {
   
  return (
    <button id={style.Button} {...rest} className={isPrimary ? style.primary : style.secundary}>
      {text}
    </button>
  )
}