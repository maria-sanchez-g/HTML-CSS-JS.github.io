const { //Import persistence helpers from Service layer
  addTodo,                // adds a todo object to the data store
  getAllTodosFromService, // returns all todos from the data store
  deleteTodo,             // removes a todo by id
  updateTodo,             // updates a todo by id with a partial body
  getTodoById,            // finds a single todo by id
} = require("../Services/todoServices");

// Create a new todo with an auto-incremented id, then persist it via the Service.
const createTodo = (todo) => { // Adds an auto‑incremented id, then stores
  const todoList = getAllTodosFromService(); // Read current items to compute max id
  currentMaxId =
    todoList.length > 0 ? Math.max(...todoList.map((todo) => todo.id)) : 0;
  nextId = currentMaxId + 1; // Compute next id
  const newTodo = { ...todo, id: nextId }; // Merge provided fields with id
  addTodo(newTodo);
  return newTodo; // Return the created entity to the caller (the route will send it as JSON).
};
// Return all todos. This controller function simply delegates to the Service.
const getTodos = () => { // Controller wrapper to list all
  return getAllTodosFromService();
};
// Remove a todo by id. Returns a boolean indicating success.
const removeTodos = (id) => { // Delete by id; boolean result
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
    const updatedTodo = updateTodo(id, body); //
    return updatedTodo; //return merged result
  } else {
    return undefined;
  }
};
// Expose controller functions so your route module can wire them to HTTP endpoints. Export API to the router
module.exports = {
  createTodo,
  getTodos,
  removeTodos,
  updateTodoAction,
};

//Controllers/todoController.js (controller): implements the higher-level logic for creating IDs, validating existence, and delegating CRUD work to the service.