BEFORE YOU START, Some things need to match in your FrontEnd and Backend

Frontend calls must exactly match backend routes:

Endpoint paths and HTTP verbs

--Frontend calls must exactly match backend routes:
GET /api/products ↔ router.get("/", controller.list)
GET /api/products/:id ↔ router.get("/:id", controller.read)
POST /api/products ↔ router.post("/", controller.create)
PATCH /api/products/:id ↔ router.patch("/:id", controller.update)
DELETE /api/products/:id ↔ router.delete("/:id", controller.remove)
GET /api/cart ↔ router.get("/", controller.getCart)
POST /api/cart/:productId ↔ router.post("/:productId", controller.add)
POST /api/cart/remove-all ↔ router.post("/remove-all", controller.removeAll)
DELETE /api/cart/:productId ↔ router.delete("/:productId", controller.removeOne)
DELETE /api/cart ↔ router.delete("/", controller.clear)

--Params vs Body
When frontend posts to /api/cart/:productId, the backend must read req.params.productId.
When frontend posts to /api/cart/remove-all with { productId }, the backend must read req.body.productId.


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
---ProductServices.js
---CartServices.js

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
---ProductServices.js and CartServices.js
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

For productServices we exported these functions:
module.exports = {
    remove, update, findId, read, add,};

For cartServices we exported these functions:
module.exports = {
    deleteAll, addCart, findIndex, getCart, deleteOne, clearCart};


4-Controllers
productControllers.js / cartControllers.js

Controllers: Handles what should happen:
Read parameters (req.params.id) / (req.body.id)
Validate input / Call service functions / Decide on status code and JSON response / Handle errors correctly

Use an async function when you call something that returns a Promise, for example:
fetch()
Database library methods
API calls with Axios / Functions already marked as async

Those operations can be asynchronous, meaning Node does not block and wait, it continues running other tasks.
Inside an async function, you can use the keyword await, which pauses the function until the asynchronous task is completed, and then continues
Ex:
async function getData() {
  const response = await fetch("https://api.example.com/data");
  const result = await response.json();
  console.log(result);
}

TEMPLATE Controllers.js

// controllers/products.controller.js
// Purpose: Map HTTP requests to service calls and return JSON.

const ProductsService = require('../Services/productServices');

// GET /api/products
async function list(req, res, next) {
  try {
    const items = await ProductsService.read();
    return res.status(200).json({ items });
  } catch (err) {
    console.error('LIST /products failed:', err);
    next(err);
  }
}

// GET /api/products/:id
async function read(req, res, next) {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) return res.status(400).json({ error: 'Invalid id' });

    const item = await ProductsService.findId(id); // keep `await` for future-proofing
    if (!item) return res.status(404).json({ error: 'Product not found' });

    return res.status(200).json({ item });
  } catch (err) {
    next(err);
  }
}

// POST /api/products
async function create(req, res, next) {
  try {
    const payload = req.body;
    if (typeof payload.model !== 'string' ||
        !Number.isInteger(payload.year) ||
        typeof payload.price !== 'number' ||
        !Number.isInteger(payload.stock)) {
      return res.status(400).json({ error: 'Invalid payload' });
    }

    const item = await ProductsService.create(payload);
    return res.status(201).json({ item });
  } catch (err) {
    next(err);
  }
}

// PATCH /api/products/:id
async function update(req, res, next) {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) return res.status(400).json({ error: 'Invalid id' });

    const patch = req.body;
    const item = await ProductsService.update(id, patch);
    if (!item) return res.status(404).json({ error: 'Product not found' });

    return res.status(200).json({ item });
  } catch (err) {
    next(err);
  }
}

// DELETE /api/products/:id
async function remove(req, res, next) {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) return res.status(400).json({ error: 'Invalid id' });

    const ok = await ProductsService.remove(id);
    if (!ok) return res.status(404).json({ error: 'Product not found' });

    return res.status(204).send();
  } catch (err) {
    next(err);
  }
}

module.exports = { list, read, create, update, remove };

NOTES
1) Params vs Body (repeatable rule)

Use params when the identifier is in the URL:
/api/products/:id, /api/cart/:productId → req.params.id, req.params.productId.

Use body when the identifier is not in the URL:
/api/cart/remove-all → req.body.productId.

2) Status codes to reuse

200 success (reads, updates).

201 created (new resource).

204 no content (delete without body).

400 bad request (invalid id or payload).

404 not found (id not present in storage).

3) Response shapes (uniform contract)

Collections: { items: [...] }

Single item: { item: {...} }

Errors: { error: 'message' }

4) Totals helper pattern / Validation pattern

Every controller must make sure that the data coming from the client (req.body) or URL (req.params) is valid before sending it to your service layer. 
This prevents crashes and bad data from entering your database or JSON file.

Example (from create):

if (typeof payload.model !== 'string' ||
    !Number.isInteger(payload.year) ||
    typeof payload.price !== 'number' ||
    !Number.isInteger(payload.stock)) {
  return res.status(400).json({ error: 'Invalid payload' });
}

typeof payload.model !== 'string' → ensures model is text.
Number.isInteger(payload.year) → ensures year is a whole number.
typeof payload.price !== 'number' → ensures price is numeric (for math).
Number.isInteger(payload.stock) → ensures stock is an integer.
If any of these fail, the controller immediately responds with a 400 Bad Request, stopping the request before it touches the service or database.

5) Validation location / Error handling

To make sure your application never crashes when something goes wrong (for example, a missing file, undefined value, or database failure).

How it works:
Each controller is wrapped in a try / catch block:

try {
  const item = await ProductsService.create(payload);
  return res.status(201).json({ item });
} catch (err) {
  next(err);
}

Anything inside the try can fail.

When it does, catch (err) catches the error and passes it to next(err).

Express then sends it to your central error middleware, which formats and logs it consistently.

You can also add:

console.error('CREATE /products failed:', err);

to log where the failure occurred for debugging.

6) Async consistency

Call service functions with await even if they are synchronous today. This avoids future refactors in controllers when you replace in-memory stores with async databases.

7) Route order significance

Routes with static paths first, parameterised ones after, to avoid matching conflicts.
Example: in cart.routes.js, keep /remove-all before /:productId if they shared the same verb. Here we use different verbs (POST /remove-all vs POST /:productId), so order is OK. If you later add POST /cart/remove, place it before /:productId.

8) Copy block for any entity

Controller function names: list, read, create, update, remove.

Route pattern:
GET /entity → list
GET /entity/:id → read
POST /entity → create
PATCH /entity/:id → update
DELETE /entity/:id → remove

5 - Routes / cartRoutes.js, productRoutes.js

TEMPLATE
// routes/<resource>.routes.js
// Purpose: Define all endpoints for a given resource (for example, products, cart, users, etc.)

const express = require("express");
const router = express.Router();
const controller = require("../controllers/<resource>Controller"); 
// 👆 Replace <resource>Controller with the actual controller file name, e.g., productController or cartController.

// -------------------------------------------------------------
// RESTful routes for standard CRUD operations
// -------------------------------------------------------------

// 🟩 GET /api/<resource>
// List all items
router.get("/", controller.list);

// 🟦 GET /api/<resource>/:id
// Retrieve one item by ID
router.get("/:id", controller.read);

// 🟨 POST /api/<resource>
// Create a new item
router.post("/", controller.create);

// 🟧 PATCH /api/<resource>/:id
// Update an existing item
router.patch("/:id", controller.update);

// 🟥 DELETE /api/<resource>/:id
// Delete an item by ID
router.delete("/:id", controller.remove);

// -------------------------------------------------------------
// Custom routes (if needed)
// -------------------------------------------------------------
// Add any special endpoints for that resource below.
// Example (for carts only):
// router.post("/:productId", controller.add);
// router.post("/remove-all", controller.removeAll);
// router.delete("/", controller.clear);

module.exports = router;

//Express reads routes from top to bottom
//So the first matching route wins. The order matters

//A route with a colon is called a dynamic route.
// Ex: router.post("/:productId")
//:productId is a variable, not a word
// It accepts ANY value:
// /cart/5
// /cart/10
// /cart/abc
// /cart/remove-all (this was the problem)
//This type of route is used when the client is telling the server:
//“The item I want to modify is identified in the URL.”
// For example:
// POST /api/cart/3         → add product 3  
// DELETE /api/cart/3       → remove one unit of product 3

//Why /remove-all uses body, not params
// This route router.post("/remove-all")
// There is no variable in the URL.
// The function depends on data sent inside the body:
// { "productId": 3 }

// This is why the controller reads:
// const productId = Number(req.body.productId);


//Where the productId appears in the route determines where you must read it.
//When the ID is in the URL, you must use req.params
//When the ID is not in the URL, you must use req.body

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

vite.config.js
src (it came with App.js and main.js)
-Components
--Navbar.jsx
--ProductGrid.jsx
--ProductCard.jsx
--ProductGrid.jsx
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

IMPORTANT
A path is simply the URL location your app navigates to — for example /home, /login, /home/profile.
In React Router, you can navigate or link in two ways:
Type	Starts With /	Example	Interpreted As
Absolute path	✅ Yes	/login	Go to exactly /login, no matter where you are
Relative path	❌ No	login	Add login to the current URL path

🧩 Example. Let’s say you are currently at /home.

Code	            What it does	          Result
navigate('/login')	Absolute — starts from the root	Goes to /login ✅
navigate('login')	Relative — adds onto current path	Goes to /home/login 🚫
navigate('profile')	Relative — adds onto /home	Goes to /home/profile ✅
navigate('/home/profile')	Absolute — same result	Goes to /home/profile ✅

Use absolute paths (with /) when the target is outside the current section.
→ Example: navigating from /home to /login.

2- AppRoutes.jsx

TEMPLATE

import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home.jsx";
import Login from "../Pages/Login.jsx";
import Cart from "../Pages/Cart.jsx";
import About from "../Pages/About.jsx";

export default function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

NOTES
Difference between Express routes from the Backend and React Routes from the FrontEnd

Difference between Express routes and React routes
Type	          Location	                                          Purpose
Express routes	Backend (Node/Express folder like /routes/)	        Define API endpoints that return JSON (e.g., /api/products, /api/cart)
React routes	  Frontend (src/Pages, handled by react-router-dom)	  Define pages your user can navigate to in the browser (e.g., /, /cart, /about)


3- App.jsx
Everything in your app starts from App.jsx.
It is the first component rendered by main.jsx (or index.jsx) and defines the overall layout.
Defines layout and structure, Ensures NavBar + routes display correctly
You may need to update the file to and include new

TEMPLATE// src/App.jsx
// Purpose: The root component that wraps your entire React application.
// It provides global context, navigation (Navbar), and page routing.

import Navbar from "./Components/Navbar.jsx";
import AppRoutes from "./Routes/AppRoutes.jsx";

// Context providers – these make data (user, products, cart) available throughout the app
import { UserProvider } from "./Context/UserContext.jsx";
import { ProductProvider } from "./Context/ProductContext.jsx";
import { CartProvider } from "./Context/CartContext.jsx";

import "./App.css"; // optional styling

export default function App() {
  return (
    <UserProvider>
      <ProductProvider>
        <CartProvider>
          <Navbar />        {/* Navigation bar displayed on every page */}
          <AppRoutes />     {/* Defines which page to show based on URL */}
        </CartProvider>
      </ProductProvider>
    </UserProvider>
  );
}

NOTES
Providers are in Context files, that's what we are importing
A Provider is a special React component that exposes data and logic to the rest of your app using the Context API.
It looks like this:

export const SomethingProvider = ({ children }) => {
  const [value, setValue] = useState(initialValue);
  return (
    <SomethingContext.Provider value={{ value, setValue }}>
      {children}
    </SomethingContext.Provider>
  );
};

It is just a function that returns JSX (so yes — it is exported as a function component).

4- Update main.jsx
The main.jsx (sometimes called index.jsx) is the entry point for your React application. It is the very first file that runs when your app starts in the browser, 
and its job is to mount your <App /> component into the HTML page and enable routing.

Add <BrowserRouter> at the top level in main.js, with <App/> in the middle.
Add import { BrowserRouter } from 'react-router-dom' in main.js

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

// /<StrictMode> is a special wrapper component in React that helps developers find potential problems in their applications.
// What it does
// When you wrap parts of your code with <React.StrictMode>, React performs extra checks during development. 
// It does not affect how your app works in production — it is only active in development mode.

// A <BrowserRouter> stores the current location in the
// browser's address bar using clean URLs. It navigates using 
// the browser's built-in history stack.

5- axios.js (Single place to change the backend URL)
Purpose: Create a preconfigured Axios instance to handle API requests consistently.

TEMPLATE
import axios from "axios";

// Point to your backend
  const api = axios.create({
  baseURL: "/api", //This allows Vite’s proxy to forward requests automatically to your backend, whether it is running on port 3000, 5050, or in production later.
  headers: { "Content-Type": "application/json" },
});

export default api;

6- ProductContext.jsx / CartContext.jsx / UserContext.jsx

TEMPLATE FOR A CONTEXT FILE:

// src/Context/<Resource>Context.jsx
// Purpose: Provide global state, async loading, and simple actions for a <Resource> collection.
// How to use:
// 1) Replace every <Resource> and <resource> with your entity names (for example, Product / product).
// 2) Adjust API endpoints inside load/create/update/remove as needed.
// 3) Wrap your app with <Resource>Provider in App.jsx.

import { createContext, useContext, useEffect, useReducer, useMemo } from "react";
import api from "../api/axios";

// --------------- Initial State ---------------
const initialState = {
  loading: false,   // true while fetching
  error: null,      // string message or null
  items: [],        // array of <Resource> objects
};

// --------------- Action Types ---------------
const Types = {
  INIT_START: "INIT_START",     // started loading items
  INIT_SUCCESS: "INIT_SUCCESS", // loaded items successfully
  INIT_ERROR: "INIT_ERROR",     // failed to load items

  CREATE_SUCCESS: "CREATE_SUCCESS", // one item created
  UPDATE_SUCCESS: "UPDATE_SUCCESS", // one item updated
  REMOVE_SUCCESS: "REMOVE_SUCCESS", // one item removed
};

// --------------- Reducer ---------------
function reducer(state, action) {
  switch (action.type) {
    case Types.INIT_START:
      return { ...state, loading: true, error: null };

    case Types.INIT_SUCCESS:
      return { loading: false, error: null, items: action.payload };

    case Types.INIT_ERROR:
      return { loading: false, error: action.payload || "Failed to load", items: [] };

    case Types.CREATE_SUCCESS:
      return { ...state, items: [...state.items, action.payload] };

    case Types.UPDATE_SUCCESS: {
      const updated = action.payload;
      const items = state.items.map((r) => (Number(r.id) === Number(updated.id) ? updated : r));
      return { ...state, items };
    }

    case Types.REMOVE_SUCCESS: {
      const id = Number(action.payload);
      const items = state.items.filter((r) => Number(r.id) !== id);
      return { ...state, items };
    }

    default:
      return state; // always return current state by default
  }
}

// --------------- Context Object ---------------
const ResourceContext = createContext(null);

// --------------- Provider Component ---------------
export function ResourceProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // --------- Load all items on mount ---------
  useEffect(() => {
    let isActive = true;

    async function load() {
      dispatch({ type: Types.INIT_START });
      try {
        // Adjust endpoint, expect { items: [...] }
        const res = await api.get("/<resource>s");
        if (!isActive) return;
        dispatch({ type: Types.INIT_SUCCESS, payload: res.data.items || [] });
      } catch (err) {
        if (!isActive) return;
        dispatch({ type: Types.INIT_ERROR, payload: err?.message || "Failed to load <resource>s" });
      }
    }

    load();
    return () => { isActive = false; }; // prevent dispatch if unmounted
  }, []);

  // --------- Actions (adjust endpoints as needed) ---------
  async function createOne(payload) {
    const res = await api.post("/<resource>s", payload);   // expect { item: {...} }
    dispatch({ type: Types.CREATE_SUCCESS, payload: res.data.item });
    return res.data.item;
  }

  async function updateOne(id, patch) {
    const res = await api.patch(`/\<resource>s/${id}`, patch); // expect { item: {...} }
    dispatch({ type: Types.UPDATE_SUCCESS, payload: res.data.item });
    return res.data.item;
  }

  async function removeOne(id) {
    await api.delete(`/\<resource>s/${id}`); // expect 204
    dispatch({ type: Types.REMOVE_SUCCESS, payload: id });
  }

  // --------- Selectors (pure helpers) ---------
  const getById = (id) => state.items.find((r) => Number(r.id) === Number(id)) || null;

  // Example derived values
  const count = useMemo(() => state.items.length, [state.items]);

  // --------- Exposed value (stable object via useMemo) ---------
  const value = useMemo(
    () => ({
      ...state,        // loading, error, items
      // selectors
      getById,
      count,
      // actions
      createOne,
      updateOne,
      removeOne,
    }),
    [state] // safe because state is a single object from reducer
  );

  return <ResourceContext.Provider value={value}>{children}</ResourceContext.Provider>;
}

// --------------- Hook for Easy Access ---------------
export function useResources() {
  const ctx = useContext(ResourceContext);
  if (!ctx) throw new Error("useResources must be used inside ResourceProvider");
  return ctx;
}

NOTES
After creating the context files, update app.jsx

7 - Components: LoginForm, Navbar, ProductGrid, ProductCard, ProductCart
7.1 LoginForm

LoginFormloginForm.jsx = a small reusable component with logic.
loginPage.jsx = a full screen (page) where that component is used.

TEMPLATE FOR LOGIN FORM
import React, { useState } from "react";
import { useUser } from "../Context/UserContext"; // import your custom context hook

export default function LoginForm() {
  // 1️⃣ Access the context
  const { currentUser, handleUpdateUser, handleLogout } = useUser();

  // 2️⃣ Create local state for the email input
  const [email, setEmail] = useState("");

  // 3️⃣ Handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    if (email.trim() !== "") {
      handleUpdateUser(email); // update user in context
      setEmail(""); // clear input
    }
  }

  // 4️⃣ If user is logged in, show welcome + logout
  if (currentUser) {
    return (
      <div className="LoginForm">
        <p>Welcome {currentUser.email}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  // 5️⃣ Otherwise, show login form
  return (
    <form onSubmit={handleSubmit} className="LoginForm">
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}

7.2 ProductCard
Look for the teamplate in MUI
Card is used to display one single product.

TEMPLATE

import { Card, CardContent, CardMedia, CardActions, Button, Typography, Chip, Stack } from "@mui/material";
import { useCart } from "../Context/CartContext";

export default function ProductCard({ product }) {
const { addOne, removeOne, countPerProduct } = useCart();
const qtyInCart = countPerProduct(product.id);
const outOfStock = product.stock === 0;

const handleAdd = () => addOne(product.id);
const handleRemove = () => removeOne(product.id);

  
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardMedia component="img" height="160" image={product.image} alt={product.model} />
      <CardContent sx={{ flexGrow: 1 }}>
        <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
          <Typography variant="h6">{product.model}</Typography>
          {qtyInCart > 0 && <Chip size="small" label={`In cart: ${qtyInCart}`} />}
        </Stack>
        <Typography variant="body2" color="text.secondary">
          {product.desc || `${product.year} • Stock: ${product.stock}`}
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 1 }}>
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleAdd} disabled={outOfStock} variant="contained" fullWidth>
          Add
        </Button>
        <Button onClick={handleRemove} disabled={outOfStock} variant="outlined" fullWidth>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
//Disable the “Add to Cart” button when the product is out of stock.


7.3 ProductGrid
Look for the teamplate in MUI
Grid is used to display many cards in an organized layout that adjusts to screen size.

TEMPLATE
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={2}>
        {products.map((p) => (
          <Grid key={p.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <ProductCard product={p} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}


7.4-Navbar
Look for the teamplate in MUI

TEMPLATE
// Components/NavBar.jsx
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Badge from "@mui/material/Badge"
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { useUser } from "../Context/UserContext";
import { useProducts } from "../Context/ProductContext.jsx";


export default function NavBar() {
  const navigate = useNavigate();
  const { totalQty, totalPrice } = useCart();
  const { items: products } = useProducts();
  const grandTotal = totalPrice(products);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>     
          <Button color="inherit" onClick={() => navigate("/")}>
            Home
          </Button>
            <Button color="inherit" onClick={() => navigate("/about")}>
            About
         </Button>
          <Button color="inherit" onClick={() => navigate("/cart")}>
            <Badge badgeContent={totalQty} color="error">
            Cart
           </Badge>
          <Typography variant="body2">
             ${grandTotal.toFixed(2)}           
          </Typography>
         </Button>
          <Button color="inherit" onClick={() => navigate("/login")}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

8- Pages: Home, Login, Cart, About

This is like a TEMPLATE for all of them: 
export default function LoginPage() {
  return (
    <div className="LoginPage componentBox">
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
}

8.1 Homepage
Home page calls ProductGrid
import { useProducts } from "../Context/ProductContext";
import ProductGrid from "../Components/ProductGrid";

export default function Home() {
  const { items: products, loading, error } = useProducts();
  const navigate = useNavigate()
  if (loading) return <div>Loading…</div>;
  if (error)   return <div>Error: {error}</div>;

  return <ProductGrid products={products} />;
}

use const navigate = useNavigate(); //Built in hook. This creates a constant called navigate.

8.2 About
TEMPLATE
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="PageNotFound">
      <h1>Page Not Found</h1>
      <p>
        Going back <Link to="/">home</Link>
      </p>
    </div>
  );
}

export default About;

<Link> is a React Router component that changes pages without refreshing the browser. 
It’s perfect when you want a menu link or a text link that takes users to another route.

* I only need <Outlet /> if the app uses nested routes — meaning one route is displayed inside another route’s layout.
if your homePage has internal sections such as /homePage/profile or /homePage/profilePage, you would use <Outlet /> 
inside DashboardPage.jsx to show those child pages.
Outlet is includen in homePage

8.3 Login

Also create loginForm under Components folder and userContext inside of Context folder, and import it from loginPage
userContext, import the context in main.jsx
*Main.js is the entry point of your React app.
<React.StrictMode> helps catch coding mistakes in development.
<UserProvider> wraps the whole app, giving access to currentUser, updateUser, and logOutUser anywhere inside.
<App /> is your main component, which contains all pages and routes.
<BrowserRouter> requires that your entire app be wrapped in a router provider
*

*App.jsx is the root component that defines the structure of your application.
Defines what pages, routes, or components appear in the UI
In App.jsx I can include the following: <Navbar> <main> <Footer> <BrowserRouter>
BrowserRouter can also be included in its own file AppRoutes.jsx
*

8.4 Cart

TEMPLATE
import { useContext } from "react";
import { Container, Typography } from "@mui/material";
// import { CartContext } from "../Context/CartContext";  // You will enable this later

export default function Cart() {
  // 1) Get cart data from CartContext here
  // const { items, dispatch } = useContext(CartContext);

  // 2) Calculate total price here
  // const total = ...

  return (
    <Container sx={{ paddingY: 4 }}>
      {/* Title */}
      <Typography variant="h4" gutterBottom>
        My Cart
      </Typography>

      {/* 3) If cart is empty, show a message */}
      {/* Example:
          if (items.length === 0) return <Typography>Your cart is empty.</Typography>
      */}

      {/* 4) List your cart items in a loop */}
      {/* Replace the placeholder below with a .map loop */}
      <div>
        {/* Example structure for each item:
            <div>
              <img src={item.image} />
              <p>{item.name}</p>
              <p>{item.qty}</p>
              <button>+</button>
              <button>-</button>
              <button>Remove All</button>
            </div>
        */}
      </div>

      {/* 5) Display total price */}
      {/* <Typography variant="h6">Total: {total}</Typography> */}

      {/* 6) Optional: Checkout button */}
      {/* <button>Checkout</button> */}
    </Container>
  );
}

9- modify vite.config.js

// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

//I had to change my proxy because the frontend and backend because backend runs on: http://localhost:3000 and frontnd on: http://localhost:5173.
//That coused me an issue
//This is called the Same-Origin Policy.
//Browsers block requests between different origins unless the backend explicitly allows it using CORS headers.
//Your backend was not sending those CORS headers, so the browser blocked the request → Network Error.
// Why this works
// The browser never sees port 3000 anymore.
// It only talks to 5173 (the same origin).
// Vite silently forwards the request to backend 3000 behind the scenes.
// That removes the need for CORS on the backend