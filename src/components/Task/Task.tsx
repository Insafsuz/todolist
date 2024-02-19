import { FC } from 'react'
import { GoTrash } from 'react-icons/go'
import { SlPencil } from 'react-icons/sl'

import Checkbox from '../ui/Checkbox/Checkbox'
import styles from './Task.module.scss'

interface TaskProps {}

const Task: FC<TaskProps> = ({}) => {
  return (
    <li className={styles.task}>
      <Checkbox>New task</Checkbox>
      <div className={styles.control}>
        <SlPencil className={styles.action} />
        <GoTrash className={styles.action} />
      </div>
    </li>
  )
}

export default Task
