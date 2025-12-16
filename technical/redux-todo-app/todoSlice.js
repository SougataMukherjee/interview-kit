import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  editIndex: null,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    },

    deleteTodo(state, action) {
      state.todos.splice(action.payload, 1);
    },

    setEditTodo(state, action) {
      state.editIndex = action.payload.index;
    },

    updateTodo(state, action) {
      const { index, text } = action.payload;
      state.todos[index] = text;
      state.editIndex = null;
    },

    clearEdit(state) {
      state.editIndex = null;
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  setEditTodo,
  updateTodo,
  clearEdit,
} = todoSlice.actions;

export default todoSlice.reducer;
