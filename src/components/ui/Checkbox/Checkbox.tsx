import { FC, ReactNode } from 'react'
import styles from './Checkbox.module.scss'

interface CheckboxProps {
  children: ReactNode
  id: string
}

const Checkbox: FC<CheckboxProps> = ({ children, id }) => {
  return (
    <div className={styles.wrapper}>
      <input className={styles.checkbox} type='checkbox' id={id} />
      <label className={styles.label} htmlFor={id}>
        {children}
      </label>
    </div>
  )
}

export default Checkbox
