const express = require("express");
const router = express.Router(); // Create a new router object to handle routes

const { // Import controller functions that handle business logic
  createTodo,
  getTodos,
  removeTodos,
  updateTodoAction,
} = require("../Controllers/todoController");

router.get("/", (req, res) => { // GET / → return all todos
  res.json(getTodos());
});
// create a todos
router.post("/", (req, res) => { // POST / → create a new todo
  const body = req.body; // Get the data sent by the client (req.body is already parsed by express.json())
  const newTodo = createTodo(body); // Call createTodo() to add a new todo
  res.json(newTodo); // Send the new todo back to the client as JSON
});

router.delete("/:id", (req, res) => { //delete
  const { id } = req.params;
  const isDeleted = removeTodos(id);
  if (isDeleted) {
    res.sendStatus(204);
  } else {
    res.sendStatus(403);
  }
});
// PUT /:id → update a todo by ID
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const updatedTodo = updateTodoAction(id, body);
  if (updatedTodo) {
    res.json(updatedTodo);
  } else {
    res.sendStatus(403);
  }
});

module.exports = router; // Export the router so it can be used in index.js or server.js