import { FC } from 'react'
import Task from '../Task/Task'
import styles from './TaskList.module.scss'

interface TaskListProps {
  tasks: ITask[]
  deleteTask: (id: string) => void
}

const TaskList: FC<TaskListProps> = ({ tasks, deleteTask }) => {
  return (
    <ul className={styles.list}>
      {tasks.map(task => (
        <Task task={task} key={task.id} deleteTask={deleteTask} />
      ))}
    </ul>
  )
}

export default TaskList
