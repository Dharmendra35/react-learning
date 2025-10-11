import { createContext, useContext } from "react";

export const TodoContext = createContext({
  //property of todo
  todos: [
    {
      id: 1,
      todo: " Todo msg",
      completed: false,
    },
  ],
  //functionality of todo
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
