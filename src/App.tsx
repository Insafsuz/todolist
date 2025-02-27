import { useState } from 'react'
import AddForm from './components/AddForm/AddForm'
import TaskList from './components/TaskList/TaskList'
import Button from './components/ui/Button/Button'
import Input from './components/ui/Input/Input'
import Modal from './components/ui/Modal/Modal'
import Select from './components/ui/Select/Select'
import useTask from './hooks/useTask'
import { FilterStatus } from './types'

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

  return (
    <div className='container'>
      <h1 className='title'>Todo list</h1>
      <div className='header'>
        <div className='column'>
          <Select
            value={filterStatus}
            onChange={e => setFilterStatus(e.target.value as FilterStatus)}
            options={[
              { value: 'all', name: 'All' },
              { value: 'complete', name: 'Complete' },
              { value: 'incomplete', name: 'Incomplete' },
            ]}
          />
        </div>
        <div className='column'>
          <Input
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            type='text'
            id='search'
            placeholder='Search task'
          />
        </div>
        <div className='column'>
          <Button
            onClick={() => setIsModalVisible(true)}
            type='button'
            variant='primary'
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
        <AddForm addTask={addTask} setIsModalVisible={setIsModalVisible} />
      </Modal>
    </div>
  )
}

export default App
