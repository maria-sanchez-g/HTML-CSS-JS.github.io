const {
  addTodo,
  getAllTodosFromService,
  deleteTodo,
  updateTodo,
  getTodoById,
} = require("../Services/todoService");

const createTodo = (todo) => {
  const todoList = getAllTodosFromService();
  currentMaxId =
    todoList.length > 0 ? Math.max(...todoList.map((todo) => todo.id)) : 0;
  nextId = currentMaxId + 1;
  const newTodo = { ...todo, id: nextId };
  addTodo(newTodo);
  return newTodo;
};

const getTodos = () => {
  return getAllTodosFromService();
};

const removeTodos = (id) => {
  const targetTodo = getTodoById(id);
  if (targetTodo) {
    deleteTodo(id);
    return true;
  } else {
    return false;
  }
};

const updateTodoAction = (id, body) => {
  const targetTodo = getTodoById(id);
  if (targetTodo) {
    const updatedTodo = updateTodo(id, body);
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
