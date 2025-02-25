import { FC, PropsWithChildren } from 'react'
import { IoClose } from 'react-icons/io5'
import styles from './Modal.module.scss'

type ModalProps = {
  isModalVisible: boolean
  setIsModalVisible: (isModalVisible: boolean) => void
}

const Modal: FC<PropsWithChildren<ModalProps>> = ({
  isModalVisible,
  setIsModalVisible,
  children,
}) => {
  const closeModal = () => {
    setIsModalVisible(false)
  }

  return (
    isModalVisible && (
      <div className={styles.modal} onClick={closeModal}>
        <div className={styles.content} onClick={e => e.stopPropagation()}>
          {children}
          <button className={styles.btn} onClick={closeModal} type='button'>
            <IoClose />
          </button>
        </div>
      </div>
    )
  )
}

export default Modal
