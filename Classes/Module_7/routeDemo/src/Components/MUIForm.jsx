import { useState } from "react";
import {
  TextField,
  Checkbox,
  Select,
  MenuItem,
  Button,
  FormControl,
  FormControlLabel,
  InputLabel,
} from "@mui/material";

export default function MUIForm() {
  const [age, setAge] = useState(10);
  const [greeting, setGreeting] = useState("Hello World");
  const [checkMe, setCheckMe] = useState(false);
<<<<<<< HEAD
=======

>>>>>>> 711dc767046a76b6559ad28849641fb2150aa109
  const formSubmit = (e) => {
    e.preventDefault();
    console.log("formSubmit");
    console.log("age", age);
    console.log("greeting", greeting);
    console.log("checkMe", checkMe);
  };
<<<<<<< HEAD
=======

>>>>>>> 711dc767046a76b6559ad28849641fb2150aa109
  return (
    <form onSubmit={formSubmit}>
      <TextField
        required
        id="outlined-required"
        label="Greeting"
        value={greeting}
        onChange={(e) => setGreeting(e.target.value)}
      />
      <FormControlLabel
        control={
          <Checkbox value={checkMe} onClick={() => setCheckMe(!checkMe)} />
        }
        label="Uncheck Me"
      />
      <FormControl>
        <InputLabel>Age</InputLabel>
        <Select value={age} onChange={(e) => setAge(e.target.value)}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 711dc767046a76b6559ad28849641fb2150aa109
