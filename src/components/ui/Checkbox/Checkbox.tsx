import { FC, PropsWithChildren } from 'react'
import styles from './Checkbox.module.scss'

const Checkbox: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <input className={styles.checkbox} type='checkbox' id='checkbox' />
      <label className={styles.label} htmlFor='checkbox'>
        {children}
      </label>
    </div>
  )
}

export default Checkbox
