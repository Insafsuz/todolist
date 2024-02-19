import { FC, MouseEvent, ReactNode } from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  type: 'button' | 'submit'
  variant: 'primary' | 'secondary'
  children: ReactNode
  className?: string
}

const Button: FC<ButtonProps> = ({
  children,
  variant,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`${styles.btn} ${className} ${
        variant === 'primary' ? styles.primary : styles.secondary
      }`}
    >
      {children}
    </button>
  )
}

export default Button
