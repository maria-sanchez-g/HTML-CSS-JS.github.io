const express = require("express");
const router = express.Router(); // Create a new router object to handle routes

const { // Import controller functions that handle business logic
  createTodo,
  getTodos,
  removeTodos,
  updateTodoAction,
} = require("../Controllers/todoController");

router.get("/", (req, res) => { // GET / → return all todos
  res.json(getTodos()); //return JSON array from controller
});
// create a todos
router.post("/", (req, res) => { // POST / → create a new todo
  const body = req.body; //Get the data sent by the client (req.body is already parsed by express.json())
  const newTodo = createTodo(body); //Call createTodo() to add a new todo //Add id and store via service
  res.json(newTodo); //Send the new todo back to the client as JSON
});

router.delete("/:id", (req, res) => { //delete // DELETE /api/todos/:id → delete by id
  const { id } = req.params; // Extract :id from URL
  const isDeleted = removeTodos(id); // Ask controller to remove it
  if (isDeleted) {
    res.sendStatus(204);
  } else {
    res.sendStatus(403);
  }
});
// PUT /:id → update a todo by ID
router.put("/:id", (req, res) => { // PUT /api/todos/:id → update by id
  const { id } = req.params; // Id to update
  const body = req.body; // New fields to merge
  const updatedTodo = updateTodoAction(id, body);
  if (updatedTodo) {
    res.json(updatedTodo);
  } else {
    res.sendStatus(403);
  }
});

module.exports = router; // Export the router so it can be used in index.js or server.js

//objects: req, res and properties like param and body come from express
//res and req are request and response in the HTTP cicle

// General Rule:
// Use req.params when the data is part of the URL path (usually identifiers).
// Use req.body when the data is part of the content you are sending to create or update something.