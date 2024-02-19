import { FC, ReactNode } from 'react'
import { IoClose } from 'react-icons/io5'
import styles from './Modal.module.scss'

interface ModalProps {
  active: boolean
  setActive: (active: boolean) => void
  children: ReactNode
}

const Modal: FC<ModalProps> = ({ active, setActive, children }) => {
  return (
    active && (
      <div className={styles.modal} onClick={() => setActive(false)}>
        <div className={styles.content} onClick={e => e.stopPropagation()}>
          {children}
          <button
            className={styles.btn}
            onClick={() => setActive(false)}
            type='button'
          >
            <IoClose />
          </button>
        </div>
      </div>
    )
  )
}

export default Modal
