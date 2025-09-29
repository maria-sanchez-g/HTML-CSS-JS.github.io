const express = require('express');
const app = express();
const port = 5050;

const todoList = [
    {
        title: "This is a title",
        desc: "This is a desc",
        isCompleted: false,
    },
    {
        title: "This is a title1",
        desc: "This is a desc1",
        isCompleted: true,
    }
]

app.use("/", express.static("./public"));

app.get("/api/todos",(req, res) => {
    res.json(todoList);
})

app.listen(port, () => {
    console.log("server is up");
});
