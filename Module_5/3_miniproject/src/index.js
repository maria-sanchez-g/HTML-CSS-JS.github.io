const express = require("express"); //imports express framework to create a server
const app = express(); // Create an Express application instance
app.use(express.json());// Built-in middleware that parses incoming JSON requests. It allows you to read req.body as a JavaScript object in your routes
const todoRoutes = require("./Routes/todos"); // Import the router you created for handling all /api/todos endpoints

const port = 5050;// Port where the server will listen

app.use("/", express.static("./public")); // Serve static files (HTML, CSS, JS) from the "public" folder when users visit the root URL "/"
app.use("/api/todos", todoRoutes); // Mount your todo routes under "/api/todos"

app.listen(port, () => { // Start the HTTP server and log a message once it is running
  console.log("server is up");
});

//index.js is where you set up your server configuration, middleware, routes, and error handling.