import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      //   console.log(state);
      //   console.log(action);
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        complited: false,
      });
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
    },
    toggleTodoComplite(state, action) {
      const toggledTodo = state.todos.find(
        todo => todo.id === action.payload.id
      );
      toggledTodo.complited = !toggledTodo.complited;
    },
  },
});

export const { addTodo, removeTodo, toggleTodoComplite } = todoSlice.actions;
export default todoSlice.reducer;
