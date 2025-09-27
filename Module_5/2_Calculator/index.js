const express = require('express'); //loads express libray
const app = express(); //create express app
const port = 3000; //Stores the port number where your server will run.
const calculatorRoutes =
require('./routes/calculatorRoutes')
// serve static files
app.use(express.static('public')); //Tells Express to look inside the public folder for static files (HTML, CSS, JS, images).

// import routes
const myTestRoutes = require('./routes/CalculatorRoutes');

// use routes
app.use('/', calculatorRoutes); //Mounts all the routes from myTestRoutes.js on the root path /

// start server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
