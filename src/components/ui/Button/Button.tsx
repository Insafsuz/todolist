import { ButtonHTMLAttributes, FC } from 'react'
import styles from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary'
}

const Button: FC<ButtonProps> = ({ variant, ...props }) => {
  return (
    <button
      className={`${styles.button} ${
        variant === 'primary' ? styles.primary : styles.secondary
      }`}
      {...props}
    />
  )
}

export default Button
