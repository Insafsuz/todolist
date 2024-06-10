import { useEffect, useState } from 'react'
import AddForm from './components/AddForm/AddForm'
import TaskList from './components/TaskList/TaskList'
import Button from './components/ui/Button/Button'
import Input from './components/ui/Input/Input'
import Modal from './components/ui/Modal/Modal'
import Select from './components/ui/Select/Select'

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [tasks, setTasks] = useState<ITask[]>([])
  const [filterStatus, setFilterStatus] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const storedTasks = localStorage.getItem('tasks')

  useEffect(() => {
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (task: ITask) => {
    setTasks(prev => [...prev, task])
  }

  const deleteTask = (id: string) => {
    setTasks(prev => [...prev].filter(task => task.id !== id))
  }

  const toggleTask = (id: string) => {
    setTasks(prev =>
      [...prev].map(task =>
        task.id === id
          ? {
              ...task,
              checked: !task.checked,
              status: task.checked ? 'incomplete' : 'complete',
            }
          : task
      )
    )
  }

  const editTask = (id: string, editedTitle: string) => {
    setTasks(prev =>
      [...prev].map(task =>
        task.id === id
          ? {
              ...task,
              title: editedTitle,
            }
          : task
      )
    )
  }

  const filteredTasks = tasks
    .filter(task =>
      filterStatus === 'all' ? true : task.status === filterStatus
    )
    .filter(task => task.title.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className='container'>
      <h1 className='title'>Todo list</h1>
      <div className='header'>
        <div className='item'>
          <Select
            options={[
              { value: 'all', name: 'All' },
              { value: 'complete', name: 'Complete' },
              { value: 'incomplete', name: 'Incomplete' },
            ]}
            value={filterStatus}
            onChange={e => setFilterStatus(e.target.value)}
          />
        </div>

        <div className='item'>
          <Input
            type='text'
            id='search'
            placeholder='Search task'
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        <div className='item'>
          <Button
            type='button'
            variant='primary'
            onClick={() => setIsModalVisible(true)}
          >
            Add task
          </Button>
        </div>
      </div>
      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
        editTask={editTask}
      />
      <Modal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      >
        <AddForm setIsModalVisible={setIsModalVisible} addTask={addTask} />
      </Modal>
    </div>
  )
}

export default App
