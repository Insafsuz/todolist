import { ChangeEvent, useState } from 'react'
import AddForm from './components/AddForm/AddForm'
import TaskList from './components/TaskList/TaskList'
import Button from './components/ui/Button/Button'
import Input from './components/ui/Input/Input'
import Modal from './components/ui/Modal/Modal'
import Select from './components/ui/Select/Select'
import useTask from './hooks/useTask'

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const {
    tasks,
    addTask,
    deleteTask,
    toggleTask,
    editTask,
    filterStatus,
    setFilterStatus,
    searchTerm,
    setSearchTerm,
  } = useTask()

  const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    if (value === 'all' || value === 'complete' || value === 'incomplete') {
      setFilterStatus(value)
    }
  }

  return (
    <div className='container'>
      <h1 className='title'>Todo list</h1>
      <div className='header'>
        <div className='column'>
          <Select
            options={[
              { value: 'all', name: 'All' },
              { value: 'complete', name: 'Complete' },
              { value: 'incomplete', name: 'Incomplete' },
            ]}
            value={filterStatus}
            onChange={handleFilterChange}
          />
        </div>
        <div className='column'>
          <Input
            type='text'
            id='search'
            placeholder='Search task'
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        <div className='column'>
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
        tasks={tasks}
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
