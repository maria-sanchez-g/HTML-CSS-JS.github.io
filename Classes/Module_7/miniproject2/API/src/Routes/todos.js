const express = require("express");
const router = express.Router();
const {
  createTodo,
  getTodos,
  removeTodos,
  updateTodoAction,
} = require("../Controllers/todoController");

router.get("/", (req, res) => {
  res.json(getTodos());
});
// create a todos
router.post("/", (req, res) => {
  const body = req.body;
  const newTodo = createTodo(body);
  res.json(newTodo);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const isDeleted = removeTodos(id);
  if (isDeleted) {
    res.sendStatus(204);
  } else {
    res.sendStatus(403);
  }
});

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

module.exports = router;
