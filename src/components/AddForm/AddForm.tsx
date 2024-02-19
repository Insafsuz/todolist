import { FC } from 'react'
import Button from '../ui/Button/Button'
import Input from '../ui/Input/Input'
import styles from './AddForm.module.scss'

interface AddFormProps {
  setActive: (active: boolean) => void
}

const AddForm: FC<AddFormProps> = ({ setActive }) => {
  return (
    <form className={styles.form}>
      <h2 className={styles.title}>New task</h2>
      <Input type='text' id='task' placeholder='New task...' />
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
