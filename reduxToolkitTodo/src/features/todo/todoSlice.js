import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello world" }],
};

/*
creation of slicer needs three things
name-> Unique key for the slice
initialState -> the starting state, 
reducers -> the function that update the state
reducers :{property, functions}
function contains (state, action)

State → The data (current value)

Actions → The “verbs” (things you can do to change the state)

Reducers → The actual logic that modifies the state when an action happens
*/
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
