const express = require('express'); //loads express libray
const app = express(); //create express app
const port = 3000; //Stores the port number where your server will run.

// serve static files
app.use(express.static('public')); //Tells Express to look inside the public folder for static files (HTML, CSS, JS, images).

// import routes
const myTestRoutes = require('./routes/myTestRoutes');

// use routes
app.use('/', myTestRoutes); //Mounts all the routes from myTestRoutes.js on the root path /

// start server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

//express:
// Framework: It is not a programming language — it is a library (framework) that runs on top of Node.js.
// Purpose: It helps you handle HTTP requests (GET, POST, PUT, DELETE) and send responses easily.
// Creates a server easily (no need to manually use Node’s http module).
// Handles routes — you can define what happens for each URL.
// Handles request data — query params, JSON bodies, form data.
// Sends responses — HTML, JSON, files, etc.
// Supports middleware — extra functions that run before sending a response.