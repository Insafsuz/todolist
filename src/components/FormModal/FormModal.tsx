import { FC } from 'react'
import { Task } from '../../types'
import AddForm from '../AddForm/AddForm'
import Modal from '../ui/Modal/Modal'

type FormModalProps = {
  isModalVisible: boolean
  setIsModalVisible: (isModalVisible: boolean) => void
  addTask: (task: Task) => void
}

const FormModal: FC<FormModalProps> = ({
  isModalVisible,
  setIsModalVisible,
  addTask,
}) => {
  return (
    <Modal
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
    >
      <AddForm handleClick={() => setIsModalVisible(false)} addTask={addTask} />
    </Modal>
  )
}

export default FormModal
