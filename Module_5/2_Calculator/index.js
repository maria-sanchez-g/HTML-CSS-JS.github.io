const express = require("express"); //Loads the Express library so you can create an HTTP server and define routes.
const { add, minus } = require("./controller/calculator"); //Imports two functions (add, minus) from your controller module to keep business logic separate from routing.
const app = express(); //Creates the Express application object. You will attach middleware and routes to this object.
const port = 3000; //defines port number

app.get("/", (req, res) => {
  res.send("Hello World!");
}); //Registers a GET / route. When a browser requests the root path, the server responds with plain text “Hello World!”. If you just call localhost:3000, without the /add

app.get("/add", (req, res) => {
  const { num1, num2 } = req.query;
  const result = add(Number.parseInt(num1), Number.parseInt(num2)); //parseInt get strings as arguments
  if (!result) {
    res.send("please provide numbers");
  }
  res.send({ result });
});

// Registers GET /add.
// Extracts num1 and num2 from the query string (e.g., /add?num1=4&num2=10).
// Converts them to integers with parseInt and calls your add function.
// Sends a response to the client.

app.get("/minus", (req, res) => { //Registers GET /minus. Currently subtracts fixed numbers 6 and 3 and returns the result
  const result = minus(6, 3);
  res.send(result);
});

app.listen(port, () => { //Starts the server and logs a confirmation message.
  console.log(`Example app listening at http://localhost:${port}`);
});

//req.query is how we access GET data sent via the request query parameters. 