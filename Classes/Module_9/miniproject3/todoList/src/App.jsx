import { useState, useContext } from "react";
import { TodoProvider } from "./Context/TodoContext";
import TodoList from "./Components/TodoList";
import TodoSubmitForm from "./Components/TodoSubmitForm";
import { Grid } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./AppRoute";

function App() {
  return (
    <>
      <TodoProvider>
        <BrowserRouter>
          <AppRoute></AppRoute>
        </BrowserRouter>
      </TodoProvider>
    </>
  );
}

export default App;