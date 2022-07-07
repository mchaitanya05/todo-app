import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const Todos = createSlice({
  name: "Todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload.input];
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item !== action.payload.item);
    },
  },
});

export const { addTodo, deleteTodo } = Todos.actions;
export const getTodos = (state) => state.todos;

export default Todos.reducer;
