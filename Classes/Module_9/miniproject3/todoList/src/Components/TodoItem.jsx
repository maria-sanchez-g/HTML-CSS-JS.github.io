import { useContext } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { TodoContext } from "../Context/TodoContext";
export default function TodoItem({ todo, index }) {
  const { removeTodo, updateTodo } = useContext(TodoContext);
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
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {todo.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {todo.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" onClick={delClick} color="error">
            Del
          </Button>
          <Button size="small" color="primary">
            Update
          </Button>
        </CardActions>
      </Card>
    </>
  );
}