import TodoItem from "./TodoItem";
import { TodoContext } from "../Context/TodoContext";
import { useContext } from "react";
export default function TodoList() {
  const { todos } = useContext(TodoContext);
  return todos.map((todo, index) => (
    <TodoItem key={todo._id} todo={todo} index={index}></TodoItem>
  ));
}