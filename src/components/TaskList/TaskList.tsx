import { FC } from 'react'
import TaskItem from '../Task/Task'
import styles from './TaskList.module.scss'

interface TaskListProps {}

const TaskList: FC<TaskListProps> = ({}) => {
  return (
    <>
      <ul className={styles.list}>
        <TaskItem />
      </ul>
    </>
  )
}

export default TaskList
