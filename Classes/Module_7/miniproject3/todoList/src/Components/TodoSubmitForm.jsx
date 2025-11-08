import { useState, useContext } from "react";
import { TodoContext } from "../Context/TodoContext";
import { TextField, Button, Grid } from "@mui/material";
export default function TodoSubmitForm() {
  const [originFormData, setOriginFormData] = useState({ title: "", desc: "" });
  const { addTodo } = useContext(TodoContext);
  const todoSubmit = (event) => {
    event.preventDefault();
    addTodo(originFormData);
    setOriginFormData({ title: "", desc: "" });
  };
  const updateFormData = (incomingData) => {
    const updateFormData = { ...originFormData, ...incomingData }; //title| desc
    setOriginFormData(updateFormData);
  };
  return (
    <form onSubmit={todoSubmit}>
      <h1>New todo form</h1>
      <Grid container spacing={2}>
        <Grid size={12}>
          <TextField
            label="Title"
            variant="outlined"
            name="title"
            value={originFormData.title}
            sx={{ width: "100%" }}
            onChange={(e) => {
              updateFormData({ title: e.target.value });
            }}
          />
        </Grid>
        <Grid size={12}>
          <TextField
            label="Description"
            variant="outlined"
            name="description"
            value={originFormData.desc}
            sx={{ width: "100%" }}
            onChange={(e) => {
              updateFormData({ desc: e.target.value });
            }}
          />
        </Grid>
        <Grid>
          <Button type="submit">Submit</Button>
        </Grid>
      </Grid>
    </form>
  );
}