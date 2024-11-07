import { FC, FormEvent, useState } from 'react'
import { Task } from '../../types'
import Button from '../ui/Button/Button'
import Input from '../ui/Input/Input'
import styles from './AddForm.module.scss'

type AddFormProps = {
  handleClick: () => void
  addTask: (task: Task) => void
}

const AddForm: FC<AddFormProps> = ({ handleClick, addTask }) => {
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
      handleClick()
    }
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.title}>New task</h2>
      <Input
        type='text'
        id='task'
        placeholder='New task...'
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <div className={styles.wrapper}>
        <Button type='button' variant='secondary' onClick={handleClick}>
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
