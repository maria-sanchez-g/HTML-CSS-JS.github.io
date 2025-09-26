const express = require('express') //loads the exrpress library into your code
const app = express() //create an app using the express package
const port = 3000 //set the port to 3000
app.get('/', (req, res) => { //app.get() defines a route that handles HTTP GET requests to the root URL /. (req, res) => { ... } is a callback function that will run whenever someone visits http://localhost:3000/.
 res.send('Hello World!') //the response object (what you will send back)
})
app.listen(port, () => { //starts the server and tells it to listen on the specified port
 console.log(`Example app listening at 
http://localhost:${port}`) //The second argument is a function that runs once the server starts successfully — here it just logs a message so you know it is running.
})

//express:
// Framework: It is not a programming language — it is a library (framework) that runs on top of Node.js.
// Purpose: It helps you handle HTTP requests (GET, POST, PUT, DELETE) and send responses easily.
// Creates a server easily (no need to manually use Node’s http module).
// Handles routes — you can define what happens for each URL.
// Handles request data — query params, JSON bodies, form data.
// Sends responses — HTML, JSON, files, etc.
// Supports middleware — extra functions that run before sending a response.