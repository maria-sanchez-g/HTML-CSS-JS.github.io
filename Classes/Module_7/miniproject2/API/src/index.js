const express = require("express");
const app = express();
app.use(express.json());
const todoRoutes = require("./Routes/todos");

const port = 5050;

app.use("/", express.static("./public"));
app.use("/api/todos", todoRoutes);

app.listen(port, () => {
  console.log("server is up");
});
