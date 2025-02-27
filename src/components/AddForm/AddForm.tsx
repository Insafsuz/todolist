import { FC, FormEvent, useState } from 'react'
import { Task } from '../../types'
import Button from '../ui/Button/Button'
import Input from '../ui/Input/Input'
import styles from './AddForm.module.scss'

type AddFormProps = {
  addTask: (task: Task) => void
  setIsModalVisible: (isModalVisible: boolean) => void
}

const AddForm: FC<AddFormProps> = ({ addTask, setIsModalVisible }) => {
  const [title, setTitle] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (title) {
      addTask({
        id: crypto.randomUUID(),
        title,
        checked: false,
        status: 'incomplete',
      })
      setIsModalVisible(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.title}>New task</h2>
      <Input
        value={title}
        onChange={e => setTitle(e.target.value)}
        type='text'
        id='task'
        placeholder='New task...'
      />
      <div className={styles.wrapper}>
        <Button type='button' variant='secondary'>
          Cancel
        </Button>
        <Button type='submit' variant='primary'>
          Apply
        </Button>
      </div>
    </form>
  )
}

export default AddForm
