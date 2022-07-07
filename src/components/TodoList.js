import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, getTodos } from "../features/todos/Todos";

const TodoList = () => {
  const todos = useSelector(getTodos);
  const dispatch = useDispatch();

  const completeTodo = (e) => {
    e.target.style.textDecoration = "line-through";
  };

  const handleDelete = (item) => {
    // props.deleteTodo(item);
    dispatch(
      deleteTodo({
        item,
      })
    );
  };

  return (
    <ul className="list-group">
      {todos &&
        todos.todos.map((item) => {
          return (
            <li key={item} className="list-group-item">
              <span onClick={completeTodo}>{item}</span>
              <button
                onClick={() => handleDelete(item)}
                className="float-right"
              >
                delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};

export default TodoList;
