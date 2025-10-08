import { useState } from "react";
import TodoList from "./Components/TodoList";
import TodoSubmitForm from "./Components/TodoSubmitForm";

function App() {
  const [todos, setTodos] = useState([]);
  // const [props, aFunction] = useInput();

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
    <>
      <div className="container">
        <div className="row">
          <TodoSubmitForm addTodo={addTodo} />
          <TodoList
            todoList={todos}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          ></TodoList>
        </div>
      </div>
    </>
  );
}

export default App;
