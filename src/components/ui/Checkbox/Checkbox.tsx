import { FC, ReactNode } from 'react'
import styles from './Checkbox.module.scss'

interface CheckboxProps {
  children: ReactNode
  id: string
  checked: boolean
  onChange: () => void
}

const Checkbox: FC<CheckboxProps> = ({ children, id, checked, onChange }) => {
  return (
    <div className={styles.wrapper}>
      <input
        checked={checked}
        onChange={onChange}
        className={styles.checkbox}
        type='checkbox'
        id={id}
      />
      <label
        className={`${styles.label} ${checked ? styles.checked : null}`}
        htmlFor={id}
      >
        {children}
      </label>
    </div>
  )
}

export default Checkbox
