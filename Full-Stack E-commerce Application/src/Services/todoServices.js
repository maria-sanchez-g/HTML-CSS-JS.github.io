const todoList = []; // In-memory array to store all todos (acting as a temporary "database")


const addTodo = (todo) => { // Adds a new todo object to the todoList array
  todoList.push(todo);
};

const getAllTodosFromService = () => { // Returns the full list of todos
  return todoList;
};
const getTodoById = (id) => { // Finds and returns a single todo object by its ID
  const todo = todoList.find((todo) => todo.id == id);
  return todo;
};

const deleteTodo = (id) => { // Deletes a todo from the list using its ID
  const targetTodo = getTodoById(id);
  const targetIndex = todoList.indexOf(targetTodo);
  todoList.splice(targetIndex, 1);
};

const updateTodo = (id, body) => { // Updates an existing todo with new data (body)
  const targetTodo = getTodoById(id);
  const targetIndex = todoList.indexOf(targetTodo);
  const updatedTodo = { ...targetTodo, ...body };
  todoList.splice(targetIndex, 1, updatedTodo);
  return updatedTodo;
};

module.exports = { // Export all functions so other files (e.g., controllers) can import and use them
  addTodo,
  getAllTodosFromService,
  deleteTodo,
  updateTodo,
  getTodoById,
};

//Services/todoServices.js (service): reads and mutates the in-memory todoList array (your temporary database).