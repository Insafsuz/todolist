import { useEffect, useState } from 'react'
import { TFilterStatus, TTask } from '../types'

const useTask = () => {
  const [tasks, setTasks] = useState<TTask[]>([])
  const [filterStatus, setFilterStatus] = useState<TFilterStatus>('all')
  const [searchTerm, setSearchTerm] = useState('')

  // Загружаем задачи из localStorage при первой загрузке
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks')
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks))
    }
  }, [])

  // Сохраняем задачи в localStorage при их изменении
  useEffect(() => {
    if (tasks.length) {
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }
  }, [tasks])

  const addTask = (task: TTask) => setTasks(prev => [...prev, task])

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
