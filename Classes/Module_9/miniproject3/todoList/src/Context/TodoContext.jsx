import { createContext, useEffect, useState, useReducer } from "react";
import axios from "axios";
const todoReducer = (state, action) => {
  switch (
    action.type // switch statements are commonin reducers
  ) {
    case "init":
      return action.payload;
    case "addTodo":
      const addCopyState = [...state];
      addCopyState.push(action.payload);
      return addCopyState;
    case "removeTodo":
      const removeCopiedState = [...state];
      removeCopiedState.splice(action.payload, 1);
      return removeCopiedState;
    default:
      return state;
  }
};
export const TodoContext = createContext();

export const TodoProvider = (props) => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  
  useEffect(() => {
    const initData = async () => {
      const response = await axios.get("api/todos");
      dispatch({ type: "init", payload: response.data });
    };
    initData();
  }, []);
  const addTodo = async (todo) => {
    const response = await axios.post("api/todos", todo);
    dispatch({ type: "addTodo", payload: response.data });
  };
  const removeTodo = async (index) => {
    try {
      const targetTodo = todos[index];
      await axios.delete(`api/todos/${targetTodo._id}`);
      dispatch({ type: "removeTodo", payload: index });
    } catch (e) {
      console.log(e);
    }
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