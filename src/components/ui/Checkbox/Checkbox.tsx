import { FC, InputHTMLAttributes } from 'react'
import styles from './Checkbox.module.scss'

const Checkbox: FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...props }) => {
  return <input className={styles.checkbox} type='checkbox' {...props} />
}

export default Checkbox
