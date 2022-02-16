import Todo from './Todo'
import TodoForm from './TodoForm'

const TodoList = () => {
  return (
    <>
      <h1>Список дел </h1>
      <TodoForm />
      <ul className='todo-list'>
        <Todo />
      </ul>
    </>
  )
}

export default TodoList
