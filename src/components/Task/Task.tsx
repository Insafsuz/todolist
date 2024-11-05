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
  editTask: (id: string, editedTitle: string) => void
}

const Task: FC<TaskProps> = ({ task, deleteTask, toggleTask, editTask }) => {
  const [isChecked, setIsChecked] = useState(task.checked)
  const [isEditing, setIsEditing] = useState(false)
  const [editedTitle, setEditedTitle] = useState(task.title)

  const toggleCheckbox = () => {
    toggleTask(task.id)
    setIsChecked(!isChecked)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    editTask(task.id, editedTitle)
    setIsEditing(false)
  }

  return (
    <li className={styles.task}>
      <div className={styles.wrapper}>
        <Checkbox id={task.id} checked={isChecked} onChange={toggleCheckbox} />
        {!isEditing ? (
          <>
            <label
              htmlFor={task.id}
              className={`${styles.label} ${isChecked ? styles.checked : null}`}
            >
              {task.title}
            </label>
            <div className={styles.default}>
              <button
                type='button'
                className={styles.action}
                onClick={() => setIsEditing(true)}
              >
                <SlPencil />
              </button>
              <button
                type='button'
                className={styles.action}
                onClick={() => deleteTask(task.id)}
              >
                <GoTrash />
              </button>
            </div>
          </>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type='text'
              className={styles.input}
              autoFocus
              autoComplete='off'
              value={editedTitle}
              onChange={e => setEditedTitle(e.target.value)}
            />
            <div className={styles.edit}>
              <button type='submit' className={styles.action}>
                <BsCheckLg />
              </button>
              <button
                type='button'
                className={styles.action}
                onClick={() => setIsEditing(false)}
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
