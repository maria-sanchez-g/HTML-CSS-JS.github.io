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

// TEMPLATE
// import { Router, Routes, Route, Navigate } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";

// function AppRoutes() {
//   return (
//     <Routes>
//       <Route path="/" element={<Navigate to="/home" replace />} /> {/* Redirect root (/) to /home */}
//       <Route path="/home" element={<HomePage />}> {/* Parent route for Home with nested children */}
//         <Route index element={<div>Welcome to Home</div>} /> {/* Default child for /home */}
//         <Route path="profile" element={<ProfilePage />} />{/* Nested child route for /home/profile */}
//      </Route>
  
//       <Route path="/login" element={<LoginPage />} /> {/* Independent Login route */}
//       <Route path="*" element={<PageNotFound />} /> {/* 404 fallback */}
//     </Routes>
//   );
// }

// export default AppRoutes;

3- App.jsx
Defines layout and structure, Ensures NavBar + routes display correctly
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

5- axios.js (Single place to change the backend URL)

import axios from "axios";

// Point to your backend
  const api = axios.create({
  baseURL: "/api",//This allows Vite’s proxy to forward requests automatically to your backend, whether it is running on port 3000, 5050, or in production later.
  headers: { "Content-Type": "application/json" },
});

export default api;

6- ProductContext.jsx / CartContext.jsx / UserContext.jsx
TEMPLATE FOR A CONTEXT FILE:
import { createContext, useContext, useState } from "react";


// 1️⃣ Create the Context object — this is the "shared box" for your data
const MyContext = createContext();

// 2️⃣ Create the Provider component
export function MyProvider({ children }) {
  // Define the shared state (can be anything: string, object, etc.)
  const [value, setValue] = useState("default");

  // Example of a function that updates the state
  function updateValue(newValue) {
    setValue(newValue);
  }

  // 3️⃣ Pass the data and functions to all child components through value
  return (
    <MyContext.Provider value={{ value, updateValue }}>
      {children}
    </MyContext.Provider>
  );
}

// 4️⃣ Create a custom hook for easier access to the context
export function useMyContext() {
  return useContext(MyContext);
}

  update app.jsx

import { useState } from 'react'
import Navbar from "./Components/Navbar.jsx";
import AppRoute from "./Routes/AppRoute.jsx";
import { UserProvider } from "./Context/UserContext";
import { ProductProvider } from "./Context/ProductContext.jsx";
import { CartProvider } from "./Context/CartContext.jsx";
import './App.css'

function App() {
  
  return (
    <>
    <UserProvider>
    <ProductProvider>
      <CartProvider>
        <Navbar />
        <AppRoute />
      </CartProvider>
    </ProductProvider>
    </UserProvider>
    </>
  )
}

export default App

7 - Components: LoginForm, Navbar, ProductGrid, ProductCard
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

import { Card, CardMedia, CardContent, Typography, CardActions, Button, Stack } from "@mui/material";

/*
  Props:
    title: string
    subtitle: string (optional)
    description: string (optional)
    image: string (URL)
    onAction: function (optional)
    actionLabel: string (optional)
*/

export default function BaseCard({
  title,
  subtitle,
  description,
  image,
  actionLabel = "Action",
  onAction = () => {}
}) {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>

      <CardMedia
        component="img"
        height="160"
        image={image}
        alt={title}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6">{title}</Typography>

        {subtitle && (
          <Typography variant="subtitle2" color="text.secondary">
            {subtitle}
          </Typography>
        )}

        {description && (
          <Typography variant="body2" sx={{ mt: 1 }}>
            {description}
          </Typography>
        )}
      </CardContent>

      <CardActions>
        <Button fullWidth variant="contained" onClick={onAction}>
          {actionLabel}
        </Button>
      </CardActions>

    </Card>
  );
}


7.3 ProductGrid
Look for the teamplate in MUI
Grid is used to display many cards in an organized layout that adjusts to screen size.

TEMPLATE
import { Grid } from "@mui/material";

/*
  Props:
    items: array of objects
    renderItem: function(item) => JSX
*/

export default function BaseGrid({ items, renderItem }) {
  return (
    <Grid container spacing={2}>
      {items.map((item) => (
        <Grid item key={item.id || item.key} xs={12} sm={6} md={4} lg={3}>
          {renderItem(item)}
        </Grid>
      ))}
    </Grid>
  );
}


7.4-Navbar
Look for the teamplate in MUI

TEMPLATE
import { useContext } from "react";
import { NavLink } from 'react-router-dom'
import { useTheme } from "../Context/themeContext"


export default function navBar () {
    const { theme, toggleTheme } = useTheme(); // Access theme data
    const { currentUser, logOutUser } = useUser();    // Access user info
  return (
    <nav
    className="NavBar"
    style={{
        backgroundColor: theme.background, color: theme.foreground
    }}
    >
    <div className="menu">
      {/* Navigation links */}
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/home/profile">Profile</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        {/* Theme toggle */}
        <button onClick={toggleTheme}>
          Switch to {theme.mode === "light" ? "Dark" : "Light"} Mode
        </button>
    </div>
    </nav>
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