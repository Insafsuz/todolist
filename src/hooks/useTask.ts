import { useState } from 'react'
import { FilterStatus, Task } from '../types'
import useLocalStorage from './useLocalStorage'

const useTask = () => {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', [])
  const [filterStatus, setFilterStatus] = useState<FilterStatus>('all')
  const [searchTerm, setSearchTerm] = useState('')

  const addTask = (task: Task) => setTasks(prev => [...prev, task])

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  const toggleTask = (id: string) => {
    setTasks(prev =>
      prev.map(task =>
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
      prev.map(task =>
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

  return {
    tasks: filteredTasks,
    addTask,
    deleteTask,
    toggleTask,
    editTask,
    filterStatus,
    setFilterStatus,
    searchTerm,
    setSearchTerm,
  }
}

export default useTask
