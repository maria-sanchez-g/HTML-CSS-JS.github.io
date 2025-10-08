import TodoItem from "./TodoItem";
export default function TodoList({ todoList, removeTodo, updateTodo }) {
  return todoList.map((todo, index) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      index={index}
      removeTodo={removeTodo}
      updateTodo={updateTodo}
    ></TodoItem>
  ));
}
