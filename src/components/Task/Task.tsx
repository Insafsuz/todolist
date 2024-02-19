import { FC } from 'react'
import { GoTrash } from 'react-icons/go'
import { SlPencil } from 'react-icons/sl'

import Checkbox from '../ui/Checkbox/Checkbox'
import styles from './Task.module.scss'

interface TaskProps {
  task: ITask
  deleteTask: (id: string) => void
}

const Task: FC<TaskProps> = ({ task, deleteTask }) => {
  return (
    <li className={styles.task}>
      <Checkbox id={task.id}>{task.title}</Checkbox>
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
