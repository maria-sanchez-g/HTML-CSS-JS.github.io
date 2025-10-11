import { useState, useContext } from "react";
import { TodoProvider } from "./Context/TodoContext";
import TodoList from "./Components/TodoList";
import TodoSubmitForm from "./Components/TodoSubmitForm";

function App() {
  return (
    <>
      <TodoProvider>
        <div className="container">
          <div className="row">
            <TodoSubmitForm />
            <TodoList></TodoList>
          </div>
        </div>
      </TodoProvider>
    </>
  );
}

export default App;