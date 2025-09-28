const express = require("express")
const app = express();
app.use(express.json());
//we need this to add the JSON body parser to Express.
//Reads the raw request body when a client sends Content-Type: application/json.
// Parses it into a JavaScript object.
// Puts that object on req.body for your route handlers.
// Without it, req.body is undefined for JSON requests.
//Your API accepts data in the request body as JSON (typical for POST/PUT/PATCH)

const port = 3030;
const todoList = [
    {
        id: 1,
        title:"this is a todo",
        desc: "description"
    },
    {
        id:2,
        title:"todo2",
        desc: "desc",
    }
];


app.get('/', (req, res) => {
    res.send("index file");
});

app.get('/todos', (req, res) => {
    res.json("todo list");
});

app.put('/todos/:id', (req, res) => {
    const { id } = req.params; //destructuring the id
    const body = req.body;
    const targetTodo = todoList.find((todo)=> todo.id == id); //to find the target id inside the object
    const updatedTodo = {...targetTodo, ...body}; //get a new object with the new information merged into body, merge old and new files
    const targetIndex = todoList.indexOf(targetTodo); //we need to find the index so we can use the splice function
    todoList.splice(targetIndex, 1, updatedTodo) //update the list with the new element
    res.json(updatedTodo);
});

app.listen(port, ()=> {
    console.log(`server is up, with ${port}`);
});
//Dynamic request parameters are normally used to identify and request a specific item by its
// unique ID. For example, we may want detailed data from the server about a specific product 
// from a list of products, or a specific user from a list of users.

// Request headers contain more information about the resource to be fetched, or about the
// client requesting the resource. They can be used for authentication and caching.

// The request body is used to send more complex or large data to the server via a POST request,
// for example after a form submit, in order to create a new resource.