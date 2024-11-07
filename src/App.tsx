import { useState } from 'react'
import FormModal from './components/FormModal/FormModal'
import TaskList from './components/TaskList/TaskList'
import Button from './components/ui/Button/Button'
import Input from './components/ui/Input/Input'
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
            options={[
              { value: 'all', name: 'All' },
              { value: 'complete', name: 'Complete' },
              { value: 'incomplete', name: 'Incomplete' },
            ]}
            value={filterStatus}
            onChange={e => setFilterStatus(e.target.value as FilterStatus)}
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
      <FormModal
        addTask={addTask}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </div>
  )
}

export default App
