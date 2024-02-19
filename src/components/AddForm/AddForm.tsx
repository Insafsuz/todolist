import { FC, FormEvent, useState } from 'react'
import Button from '../ui/Button/Button'
import Input from '../ui/Input/Input'
import styles from './AddForm.module.scss'

interface AddFormProps {
  setActive: (active: boolean) => void
  addTask: (task: ITask) => void
}

const AddForm: FC<AddFormProps> = ({ setActive, addTask }) => {
  const [title, setTitle] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (title) {
      addTask({
        id: crypto.randomUUID(),
        title,
        checked: false,
        status: 'incomplete',
      })
    }
    setTitle('')
    setActive(false)
    e.preventDefault()
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
        <Button
          onClick={() => setActive(false)}
          className={styles.button}
          type='button'
          variant='secondary'
        >
          Cancel
        </Button>
        <Button className={styles.button} type='submit' variant='primary'>
          Apply
        </Button>
      </div>
    </form>
  )
}

export default AddForm
