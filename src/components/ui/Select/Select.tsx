import { FC, SelectHTMLAttributes } from 'react'
import { Option } from '../../../types'
import styles from './Select.module.scss'

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options: Option[]
}

const Select: FC<SelectProps> = ({ options, ...props }) => {
  return (
    <select className={styles.select} {...props}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  )
}

export default Select
