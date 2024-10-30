import { ButtonHTMLAttributes, FC } from 'react'
import styles from './Button.module.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
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
