const {
  addTodo,
  getAllTodosFromService,
  deleteTodo,
  updateTodo,
  getTodoById,
} = require("../Services/todoService");

const createTodo = async (todo) => {
  const newTodo = await addTodo(todo);
  return newTodo;
};

const getTodos = async () => {
  return await getAllTodosFromService();
};

const removeTodos = async (id) => {
  const targetTodo = await getTodoById(id);
  if (targetTodo) {
    await deleteTodo(id);
    return true;
  } else {
    return false;
  }
};

const updateTodoAction = async (id, body) => {
  const targetTodo = await getTodoById(id);
  if (targetTodo) {
    const updatedTodo = await updateTodo(id, body);
    return updatedTodo;
  } else {
    return undefined;
  }
};

module.exports = {
  createTodo,
  getTodos,
  removeTodos,
  updateTodoAction,
};