import { FC } from 'react'
import { Task as TaskType } from '../../types'
import Task from '../Task/Task'
import styles from './TaskList.module.scss'

type TaskListProps = {
  tasks: TaskType[]
  deleteTask: (id: string) => void
  toggleTask: (id: string) => void
  editTask: (id: string, editedTitle: string) => void
}

const TaskList: FC<TaskListProps> = ({
  tasks,
  deleteTask,
  toggleTask,
  editTask,
}) => {
  return (
    <ul className={styles.list}>
      {tasks.length > 0 ? (
        tasks.map(task => (
          <Task
            task={task}
            key={task.id}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            editTask={editTask}
          />
        ))
      ) : (
        <p className={styles.empty}>No todos</p>
      )}
    </ul>
  )
}

export default TaskList
