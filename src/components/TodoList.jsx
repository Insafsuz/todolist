import { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

const TodoList = () => {
  const [todos, setTodos] = useState([])

  const addTodo = todo => {
    if (todo) {
      const newTodo = {
        id: Math.random().toString(36).substring(2, 9),
        title: todo,
        complete: false,
      }
      setTodos([...todos, newTodo])
    }
  }

  const removeTodo = id => {
    setTodos([...todos.filter(todo => todo.id !== id)])
  }

  return (
    <>
      <h1>Список дел: {todos.length} </h1>
      <TodoForm addTodo={addTodo} />
      <ul className='todo-list'>
        {todos.map((todo, index) => (
          <Todo key={todo.id} todo={todo} index={index} removeTodo={removeTodo} />
        ))}
      </ul>
    </>
  )
}

export default TodoList
