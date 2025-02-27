import { FC, FormEvent, useState } from 'react'
import { BsCheckLg } from 'react-icons/bs'
import { GoTrash } from 'react-icons/go'
import { IoMdClose } from 'react-icons/io'
import { SlPencil } from 'react-icons/sl'
import { Task as TaskType } from '../../types'
import Checkbox from '../ui/Checkbox/Checkbox'
import styles from './Task.module.scss'

type TaskProps = {
  task: TaskType
  deleteTask: (id: string) => void
  toggleTask: (id: string) => void
  editTask: (id: string, edtiedTitle: string) => void
}

const Task: FC<TaskProps> = ({ task, deleteTask, toggleTask, editTask }) => {
  const [isEditMode, setIsEditMode] = useState(false)
  const [editedTitle, setEditedTitle] = useState(task.title)

  const closeEditMode = () => {
    setIsEditMode(false)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    editTask(task.id, editedTitle)
    closeEditMode()
  }

  return (
    <li className={styles.task}>
      <div className={styles.wrapper}>
        <Checkbox
          checked={task.checked}
          onChange={() => toggleTask(task.id)}
          id={task.id}
        />
        {!isEditMode ? (
          <>
            <label
              htmlFor={task.id}
              className={`${styles.label} ${
                task.checked ? styles.checked : null
              }`}
            >
              {task.title}
            </label>
            <div className={styles.default}>
              <button
                onClick={() => setIsEditMode(true)}
                type='button'
                className={styles.action}
              >
                <SlPencil />
              </button>
              <button
                onClick={() => deleteTask(task.id)}
                type='button'
                className={styles.action}
              >
                <GoTrash />
              </button>
            </div>
          </>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              value={editedTitle}
              onChange={e => setEditedTitle(e.target.value)}
              type='text'
              className={styles.input}
              autoFocus
              autoComplete='off'
            />
            <div className={styles.edit}>
              <button type='submit' className={styles.action}>
                <BsCheckLg />
              </button>
              <button
                onClick={closeEditMode}
                type='button'
                className={styles.action}
              >
                <IoMdClose />
              </button>
            </div>
          </form>
        )}
      </div>
    </li>
  )
}

export default Task
