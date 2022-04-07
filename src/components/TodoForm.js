import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todos/Todos';

const TodoForm = (props) => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addTodo({
        input
    }))
    setInput("")
  };

  return (
    <form>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="form-control"
          value={input}
        />
        <button onClick={handleClick} className="btn btn-primary">
          Add
        </button>
      </form>
  )
}

export default TodoForm