import { ButtonHTMLAttributes } from 'react'
import './style.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string
  isPrimary?: boolean
}

export default function ButtonSmall({isPrimary = true, text, ...rest} : ButtonProps) {
   
  return (
    <button {...rest} id='ButtonSmall' className={!isPrimary ? `primary` : `secundary`}>
      {text}
    </button>
  )
}