import { FC, FormEvent, useState } from 'react'
import { GoTrash } from 'react-icons/go'
import { SlPencil } from 'react-icons/sl'

import { BsCheckLg } from 'react-icons/bs'
import { IoMdClose } from 'react-icons/io'
import Checkbox from '../ui/Checkbox/Checkbox'
import styles from './Task.module.scss'

interface TaskProps {
  task: ITask
  deleteTask: (id: string) => void
  toggleTask: (id: string) => void
  editTask: (id: string, editedTitle: string) => void
}

const Task: FC<TaskProps> = ({ task, deleteTask, toggleTask, editTask }) => {
  const [isChecked, setIsChecked] = useState(task.checked)
  const [editing, setEditing] = useState(false)
  const [editedTitle, setEditedTitle] = useState(task.title)

  const toggleCheckbox = () => {
    toggleTask(task.id)
    setIsChecked(!isChecked)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    editTask(task.id, editedTitle)
    setEditing(false)
    e.preventDefault()
  }

  const showEdit = () => {
    setEditing(true)
    setEditedTitle(task.title)
  }

  return (
    <li className={styles.task}>
      <div className={styles.wrapper}>
        <Checkbox checked={isChecked} onChange={toggleCheckbox} id={task.id} />
        {!editing ? (
          <>
            <label
              className={`${styles.label} ${isChecked ? styles.checked : null}`}
              htmlFor={task.id}
            >
              {task.title}
            </label>
            <div className={styles.default}>
              <button className={styles.control} type='button'>
                <SlPencil onClick={showEdit} className={styles.action} />
              </button>
              <button className={styles.control} type='button'>
                <GoTrash
                  onClick={() => deleteTask(task.id)}
                  className={styles.action}
                />
              </button>
            </div>
          </>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              className={styles.input}
              value={editedTitle}
              onChange={e => setEditedTitle(e.target.value)}
              type='text'
              name='editing title'
              autoFocus
              autoComplete='off'
            />
            <div className={styles.edit}>
              <button className={styles.action} type='submit'>
                <BsCheckLg />
              </button>
              <button className={styles.action} type='button'>
                <IoMdClose onClick={() => setEditing(false)} />
              </button>
            </div>
          </form>
        )}
      </div>
    </li>
  )
}

export default Task
