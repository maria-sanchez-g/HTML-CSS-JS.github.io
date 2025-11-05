const todoList = [];

const addTodo = (todo) => {
  todoList.push(todo);
};

const getAllTodosFromService = () => {
  return todoList;
};
const getTodoById = (id) => {
  const todo = todoList.find((todo) => todo.id == id);
  return todo;
};

const deleteTodo = (id) => {
  const targetTodo = getTodoById(id);
  const targetIndex = todoList.indexOf(targetTodo);
  todoList.splice(targetIndex, 1);
};

const updateTodo = (id, body) => {
  const targetTodo = getTodoById(id);
  const targetIndex = todoList.indexOf(targetTodo);
  const updatedTodo = { ...targetTodo, ...body };
  todoList.splice(targetIndex, 1, updatedTodo);
  return updatedTodo;
};

module.exports = {
  addTodo,
  getAllTodosFromService,
  deleteTodo,
  updateTodo,
  getTodoById,
};

// 1️⃣ function vs const functionName = () => {}

// Both are ways to define functions in JavaScript — they do the same job, but the style differs slightly:

// Style	Example	Description
// Function declaration	function findAll() {}	Hoisted (can be used before it’s declared). Simple and traditional.
// // Function expression	const findAll = () => {}	Assigned to a variable. Must be declared before use. Common in modern ES6 modules.
// 2️⃣ Why your todoService.js uses const

// That file follows ES6 modular style, which many instructors prefer because:

// Each function is declared as a constant arrow function.

// You can later export them all together at the bottom: