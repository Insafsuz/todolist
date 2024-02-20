import { FC } from 'react'
import styles from './Checkbox.module.scss'

interface CheckboxProps {
  id: string
  checked: boolean
  onChange: () => void
}

const Checkbox: FC<CheckboxProps> = ({ ...props }) => {
  return <input className={styles.checkbox} type='checkbox' {...props} />
}

export default Checkbox
