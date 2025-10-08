export default function TodoItem({ todo, index, removeTodo, updateTodo }) {
  
  const textDecorationStyle = {
    textDecoration: todo.isCompleted ? "line-through" : "",
  };

  const delClick = () => {
    removeTodo(index);
  };

  const checkBoxClick = () => {
    const copiedTodo = { ...todo };
    copiedTodo.isCompleted = !copiedTodo.isCompleted;
    updateTodo(index, copiedTodo);
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 style={textDecorationStyle}>{todo.title}</h5>
        <p style={textDecorationStyle}>{todo.desc}</p>
        <div>index: {index}</div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            onClick={checkBoxClick}
            value=""
          />
          <label className="form-check-label">Is completed</label>
        </div>
        <button className="btn btn-danger" onClick={delClick}>
          Del
        </button>
        <button className="btn btn-primary">Update</button>
      </div>
    </div>
  );
}
