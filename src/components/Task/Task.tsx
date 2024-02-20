import { FC, useState } from 'react'
import { GoTrash } from 'react-icons/go'
import { SlPencil } from 'react-icons/sl'

import Checkbox from '../ui/Checkbox/Checkbox'
import styles from './Task.module.scss'

interface TaskProps {
  task: ITask
  deleteTask: (id: string) => void
  toggleTask: (id: string) => void
}

const Task: FC<TaskProps> = ({ task, deleteTask, toggleTask }) => {
  const [isChecked, setIsChecked] = useState(task.checked)

  const handleCheckbox = () => {
    toggleTask(task.id)
    setIsChecked(!isChecked)
  }

  return (
    <li className={styles.task}>
      <Checkbox checked={isChecked} onChange={handleCheckbox} id={task.id}>
        {task.title}
      </Checkbox>
      <div className={styles.control}>
        <SlPencil className={styles.action} />
        <GoTrash
          onClick={() => deleteTask(task.id)}
          className={styles.action}
        />
      </div>
    </li>
  )
}

export default Task
