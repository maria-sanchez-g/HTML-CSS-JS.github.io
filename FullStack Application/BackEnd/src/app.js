// src/app.js
// Purpose: Configure the Express application. Attach middleware and routes.

const express = require("express");
const app = express();

// This middleware allows Express to read JSON in request bodies
app.use(express.json());  // <- required to read req.body

// Mount route files
app.use("/api/products", require("./Routes/productRoutes"));
app.use("/api/cart", require("./Routes/cartRoutes"));

// Central error handler
app.use((err, req, res, next) => {
  console.error(err);
  const status = err.status || 500;
  return res.status(status).json({ error: err.message || "Internal Server Error" });
});

module.exports = app;
