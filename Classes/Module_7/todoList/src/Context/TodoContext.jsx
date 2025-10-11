import { createContext, useState } from "react";
// 1. Create the context
export const TodoContext = createContext();

export const TodoProvider = (props) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const currentMaxId =
      todos.length == 0 ? 0 : Math.max(...todos.map((todo) => todo.id));
    const newTodo = { ...todo, id: currentMaxId + 1 };
    const copiedTodos = [...todos];
    copiedTodos.push(newTodo);
    setTodos(copiedTodos);
  };

  const removeTodo = (index) => {
    const copiedTodos = [...todos];
    copiedTodos.splice(index, 1);
    setTodos(copiedTodos);
  };

  const updateTodo = (index, todo) => {
    const copiedTodos = [...todos];
    copiedTodos.splice(index, 1, todo);
    setTodos(copiedTodos);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo, updateTodo }}>
      {props.children}
    </TodoContext.Provider>
  );
};