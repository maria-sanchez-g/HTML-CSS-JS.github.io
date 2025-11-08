import TodoList from "../Components/TodoList";
import TodoSubmitForm from "../Components/TodoSubmitForm";
import { Grid } from "@mui/material";

function Index() {
  return (
    <>
      <Grid container>
        <Grid offset={3}>
          <TodoSubmitForm />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <TodoList></TodoList>
      </Grid>
    </>
  );
}
export default Index;