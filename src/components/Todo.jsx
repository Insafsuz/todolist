import { RiCloseCircleLine } from 'react-icons/ri'

const Todo = ({ todo, index, removeTodo }) => {
  return (
    <li className='todo-item'>
      <p>
        <strong>{index + 1} </strong>
        {todo.title}
      </p>
      <RiCloseCircleLine className='delete' onClick={() => removeTodo(todo.id)} />
    </li>
  )
}

export default Todo
