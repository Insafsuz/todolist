import { FC, InputHTMLAttributes } from 'react'
import styles from './Input.module.scss'

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  placeholder,
  ...props
}) => {
  return (
    <div className={styles.wrapper}>
      <input className={styles.input} {...props} autoComplete='off' required />
      <label className={styles.label} htmlFor={props.id}>
        {placeholder}
      </label>
    </div>
  )
}

export default Input
