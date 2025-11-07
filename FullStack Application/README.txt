PHASE ONE - Create folder Back End (Server that will provide data)

1- Install dependencies
npm init -y
npm install express
npm install nodemon

2 - Create structure
Folders:
-public
--index.html //not needed, When you first ran npm init or used some template, it created a basic folder structure with a public folder for static files.
-src
--app.js
--server.js
--Controllers
---cartControllers.js
---productControllers.js
--Routes
---cartRoutes.js
---productRoutes.js
--Services
---Products.js
---Carts.js

How the layers work together

User → makes HTTP request
↓
Routes → matches URL + HTTP method
↓
Controllers → handle req/res and call logic
↓
Services → perform the real business logic (data changes, calculations, validations)

File	        Location	        Role
app.js	        src/	            Configures the Express application (middleware, routes, JSON parser, error handler)
server.js	    src/	            Starts the server and listens on a port
routes/	        src/routes/	        Defines endpoint paths (URL + method)
controllers/	src/controllers/	Handles request and response logic
services/	    src/services/	    Data logic and operations (cart operations, products CRUD)


3- Folder Services
---Products.js and Carts.js
In this file we are adding the operations.

In an MVC (Model–View–Controller) structure:

1-Model = data and business logic (Product file)
The model should handle all operations related to data — these are called CRUD operations. CRUD operations are the four fundamental functions of 
persistent storage: Create, Read, Update, and Delete.

| Function                | Purpose                              | Example (without code)              |
| ----------------------- | ------------------------------------ | ----------------------------------- |
| **findAll()**           | Get all items from your data source. | “Show me all cars.”                 |
| **findById(id)**        | Get one specific car by its ID.      | “Show me car number 3.”             |
| **create(carData)**     | Add a new car to the list.           | “Add a new Toyota Camry.”           |
| **update(id, updates)** | Edit existing data.                  | “Change the price of car number 2.” |
| **remove(id)**          | Delete a car.                        | “Remove car number 5.”              |

2-View = what the user sees (your React front end)
3-Controller = the middleman that connects both (Controller file)

4-Controllers
productControllers.js / cartControllers.js

Controllers: Handles what should happen:
Read parameters (req.params.id)
Validate input
Call service functions
Decide on status code and JSON response
Handle errors correctly

Use an async function when you call something that returns a Promise, for example:
fetch()
Database library methods
API calls with Axios
Functions already marked as async

Those operations can be asynchronous, meaning Node does not block and wait, it continues running other tasks.
Inside an async function, you can use the keyword await, which pauses the function until the asynchronous task is completed, and then continues
Ex:
async function getData() {
  const response = await fetch("https://api.example.com/data");
  const result = await response.json();
  console.log(result);
}

TEMPLATE Controllers.js

// controllers/widgets.controller.js
// Purpose: Map HTTP requests → service calls → JSON responses.

const WidgetService = require('../services/widgets.service');

// GET /api/widgets
async function list(req, res, next) {
  try {
    const items = await WidgetService.readAll();
    return res.status(200).json({ items });
  } catch (err) { next(err); }
}

// GET /api/widgets/:id
async function read(req, res, next) {
  try {
    const id = Number(req.params.id);
    const item = await WidgetService.readById(id);
    if (!item) return res.status(404).json({ error: 'Not found' });
    return res.status(200).json({ item });
  } catch (err) { next(err); }
}

// POST /api/widgets
async function create(req, res, next) {
  try {
    const payload = req.body;
    // validate(payload) …
    const item = await WidgetService.create(payload);
    return res.status(201).json({ item });
  } catch (err) { next(err); }
}

// PATCH /api/widgets/:id
async function update(req, res, next) {
  try {
    const id = Number(req.params.id);
    const patch = req.body;
    const item = await WidgetService.update(id, patch);
    if (!item) return res.status(404).json({ error: 'Not found' });
    return res.status(200).json({ item });
  } catch (err) { next(err); }
}

// DELETE /api/widgets/:id
async function remove(req, res, next) {
  try {
    const id = Number(req.params.id);
    const ok = await WidgetService.remove(id);
    if (!ok) return res.status(404).json({ error: 'Not found' });
    return res.sendStatus(204);
  } catch (err) { next(err); }
}

module.exports = { list, read, create, update, remove };


5 - Routes / cartRoutes.js, productRoutes.js

TEMPLATE
// routes/<resource>.routes.js

const express = require("express");
const controller = require("../controllers/<resource>.controller");
const router = express.Router();

// List all items
router.get("/", controller.list);

// Read one item by id
router.get("/:id", controller.read); //"/:id" (dynamic route). This means the URL expects a variable value in that position.

// Create new item
router.post("/", controller.create); // "/" This route is usually used to list all items. This means the base path of that router.

// Update existing item
router.patch("/:id", controller.update);

// Remove item
router.delete("/:id", controller.remove);

module.exports = router;

6- app.js
TEMPLATE// src/app.js
// Purpose: Configure the Express application. Attach middleware and routes.

const express = require("express"); //imports express framework to create a server
const app = express(); // Create an Express application instance

// This middleware allows Express to read JSON in request bodies. // Built-in middleware that parses incoming JSON requests. It allows you to read req.body as a JavaScript object in your routes
app.use(express.json()); 

// Mount route files
app.use("/api/products", require("./routes/products.routes"));
app.use("/api/cart", require("./routes/cart.routes")); // Mount your routes under "/api/cart"

// Central error handler
app.use((err, req, res, next) => {
  console.error(err);
  const status = err.status || 500;
  return res.status(status).json({ error: err.message || "Internal Server Error" });
});

module.exports = app;


7- server.js

TEMPLATE
// src/server.js
// Purpose: Start the server and listen on a port.

const app = require("./app"); //import the router you created for handling all /api/ endpoints

const PORT = 3000; // You can change this number if needed // Port where the server will listen

app.listen(PORT, () => { // Start the HTTP server and log a message once it is running
  console.log("Server running at http://localhost:" + PORT);
});

8 - Fix package.json
{
  "name": "fullstack-application",
  "version": "1.0.0",
  "description": "",
  "main": "src/server.js",
  "scripts": {
    "dev": "nodemon src/server.js",
    "start": "node src/server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^5.1.0"
  },
  "devDependencies": {
    "nodemon": "^3.1.10"
  }
}


9 - test
npm run dev
http://localhost:3000/api/products
http://localhost:3000/api/cart


PHASE 2 - FRONT END (React + Vite + MUI + Router + Axios)

install:
npm create vite@latest .
npm install react-router-dom axios @mui/material @mui/icons-material @emotion/react @emotion/styled


1- create project structure
src
-Components
--Navbar.jsx
--ProductGrid.jsx
--ProductCard.jsx
--LoginFomr.jsx
-Pages
--About.jsx
--Cart.jsx
--Home.jsx
--Login.jsx
-Context
--CartContext.jsx
--ProductContext.jsx
--UserContext.jsx
-Routes
--AppRoutes.jsx
-Theme
--MuiTheme.js
-API
--axios.js

Add <BrowserRouter> at the top level in main.js, with <App/> in the middle.
Add import { BrowserRouter } from 'react-router-dom' in main.js

2- AppRoutes.jsx
3- App.jsx
update and include

import Navbar from "./Components/Navbar.jsx";
import AppRoute from "./Routes/AppRoute.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <AppRoute />
    </>
  );
}


4- Update main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme(); //This function creates a theme object. A theme defines global visual settings for your application.

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ThemeProvider theme={theme}>
      <CssBaseline />
    <BrowserRouter>
    <App />
  </BrowserRouter>
   </ThemeProvider>
  </StrictMode>,
)


// | Code            | What it does                                         |
// | --------------- | ---------------------------------------------------- |
// | `createTheme()` | Creates global design settings                       |
// | `ThemeProvider` | Makes those settings available to all MUI components |
// | `CssBaseline`   | Resets browser CSS so everything looks uniform       |

5- axios.js (Single place to change the backend URL)

import axios from "axios";

// Point to your backend
const api = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: { "Content-Type": "application/json" },
});

export default api;

6- ProductContext.jsx / Cart Context

update app.jsx

import { useState } from 'react'
import Navbar from "./Components/Navbar.jsx";
import AppRoute from "./Routes/AppRoute.jsx";
import { ProductProvider } from "./Context/ProductContext.jsx";
import { CartProvider } from "./Context/CartContext.jsx";
import './App.css'

function App() {
  
  return (
    <>
    <ProductProvider>
      <CartProvider>
        <Navbar />
        <AppRoute />
      </CartProvider>
    </ProductProvider>
    </>
  )
}

export default App

7-Navbar

