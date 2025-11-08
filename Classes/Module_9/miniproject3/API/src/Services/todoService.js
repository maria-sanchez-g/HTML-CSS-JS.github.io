const Todo = require("../Models/todo");

const addTodo = async (todo) => {
  const savedTodo = await Todo(todo).save();
  return savedTodo;
};

const getAllTodosFromService = async () => {
  const todos = await Todo.find({});
  return todos;
};
const getTodoById = async (id) => {
  const todo = await Todo.findById(id);
  return todo;
};

const deleteTodo = async (id) => {
  await Todo.findByIdAndDelete(id);
};

const updateTodo = async (id, body) => {
  const updatedTodo = await Todo.findByIdAndUpdate(id, body, {
    new: true,
  });
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