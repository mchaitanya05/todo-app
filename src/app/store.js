import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../features/todos/Todos";

export const store = configureStore({
  reducer: {
    todos: TodoReducer,
  },
});
