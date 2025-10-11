import { useState, useContext } from "react";
import { TodoContext } from "../Context/TodoContext";

export default function TodoSubmitForm() {
  const [originFormData, setOriginFormData] = useState({ title: "", desc: "" });
  const { addTodo } = useContext(TodoContext);
  const todoSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const todo = Object.fromEntries(data);
    addTodo(originFormData);
    setOriginFormData({ title: "", desc: "" });
  };

  const updateFormData = (incomingData) => {
    const updateFormData = { ...originFormData, ...incomingData }; //title| desc
    setOriginFormData(updateFormData);
  };
  return (
    <form onSubmit={todoSubmit}>
      <div className="mb-3">
        <label htmlFor="todoTitle" className="form-label">
          Title
        </label>
        <input
          type="text"
          value={originFormData.title}
          name="title"
          onChange={(e) => {
            updateFormData({ title: e.target.value });
          }}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="todoDesc" className="form-label">
          Description
        </label>
        <input
          type="text"
          name="desc"
          value={originFormData.desc}
          onChange={(e) => {
            updateFormData({ desc: e.target.value });
          }}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}