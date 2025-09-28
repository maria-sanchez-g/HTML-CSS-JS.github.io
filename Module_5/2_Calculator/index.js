const express = require("express"); //Loads the Express library.
const app = express(); //Creates an Express application.
const port = 3000; //Defines the port where the server will listen.

//Middleware
app.use(express.static("public")); //Serves static files from the public folder (HTML, CSS, JS).

//Import and mount the calculator routes
const calculatorRoutes = require("./routers/CalculatorRoutes"); //Imports the router from CalculatorRoutes.js.
app.use("/calculator", calculatorRoutes); //Mounts the router so routes like /add, /minus are handled.

//Global error-handling middleware. Error handler function from expressjs.com. The other way of handling the error in inside a function
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

//Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`); //Logs a message when the server starts.
});


//req.query is how we access GET data sent via the request query parameters.

// app.get. Registers GET /add. Extracts num1 and num2 from the query string (e.g., /add?num1=4&num2=10).
// Converts them to integers with parseInt and calls your add function. Sends a response to the client.