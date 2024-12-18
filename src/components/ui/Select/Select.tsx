import { ChangeEvent, FC } from 'react'
import { Option } from '../../../types'
import styles from './Select.module.scss'

type SelectProps = {
  value?: string
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
  options: Option[]
}

const Select: FC<SelectProps> = ({ options, ...props }) => {
  return (
    <select className={styles.select} {...props} id='select'>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  )
}

export default Select
