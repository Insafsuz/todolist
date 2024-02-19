import { useState } from 'react'
import AddForm from './components/AddForm/AddForm'
import TaskList from './components/TaskList/TaskList'
import Button from './components/ui/Button/Button'
import Input from './components/ui/Input/Input'
import Modal from './components/ui/Modal/Modal'
import Select from './components/ui/Select/Select'
import styles from './index.module.scss'

const App = () => {
  const [active, setActive] = useState(false)

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo list</h1>
      <div className={styles.header}>
        <div className={styles.item}>
          <Select
            options={[
              { value: 'all', name: 'All' },
              { value: 'complete', name: 'Complete' },
              { value: 'incomplete', name: 'Incomplete' },
            ]}
          />
        </div>
        <div className={styles.item}>
          <Input type='text' id='search' placeholder='Search task' />
        </div>
        <div className={styles.item}>
          <Button
            onClick={() => setActive(true)}
            type='button'
            variant='primary'
          >
            Add task
          </Button>
        </div>
      </div>
      <TaskList />
      <Modal active={active} setActive={setActive}>
        <AddForm setActive={setActive} />
      </Modal>
    </div>
  )
}

export default App
