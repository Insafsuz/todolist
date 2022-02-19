import { useState } from 'react'

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('')

  const handleChange = e => {
    setTitle(e.currentTarget.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    addTodo(title)
    setTitle('')
  }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input
        className='todo-input'
        type='text'
        value={title}
        placeholder='Введите значение...'
        onChange={handleChange}
      />
      <button className='todo-button' onClick={() => addTodo()}>
        Добавить
      </button>
    </form>
  )
}

export default TodoForm
