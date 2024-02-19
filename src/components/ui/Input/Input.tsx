import { ChangeEvent, FC } from 'react'
import styles from './Input.module.scss'

interface InputProps {
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  type: 'text' | 'password' | 'email'
  id: string
}

const Input: FC<InputProps> = ({ placeholder, ...props }) => {
  return (
    <div className={styles.wrapper}>
      <input className={styles.input} {...props} required autoComplete='off' />
      <label className={styles.label} htmlFor={props.id}>
        {placeholder}
      </label>
    </div>
  )
}

export default Input
