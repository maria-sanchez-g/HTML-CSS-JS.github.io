const {
  addTodo,                // adds a todo object to the data store
  getAllTodosFromService, // returns all todos from the data store
  deleteTodo,             // removes a todo by id
  updateTodo,             // updates a todo by id with a partial body
  getTodoById,            // finds a single todo by id
} = require("../Services/todoServices");

// Create a new todo with an auto-incremented id, then persist it via the Service.
const createTodo = (todo) => {
  const todoList = getAllTodosFromService();
  currentMaxId =
    todoList.length > 0 ? Math.max(...todoList.map((todo) => todo.id)) : 0;
  nextId = currentMaxId + 1;
  const newTodo = { ...todo, id: nextId };
  addTodo(newTodo);
  return newTodo; // Return the created entity to the caller (the route will send it as JSON).
};
// Return all todos. This controller function simply delegates to the Service.
const getTodos = () => {
  return getAllTodosFromService();
};
// Remove a todo by id. Returns a boolean indicating success.
const removeTodos = (id) => {
  const targetTodo = getTodoById(id);
  if (targetTodo) {
    deleteTodo(id);
    return true;
  } else {
    return false;
  }
};
// Update a todo by id. Returns the updated object or undefined if not found.
const updateTodoAction = (id, body) => {
  const targetTodo = getTodoById(id);
  if (targetTodo) {
    const updatedTodo = updateTodo(id, body);
    return updatedTodo;
  } else {
    return undefined;
  }
};
// Expose controller functions so your route module can wire them to HTTP endpoints.
module.exports = {
  createTodo,
  getTodos,
  removeTodos,
  updateTodoAction,
};