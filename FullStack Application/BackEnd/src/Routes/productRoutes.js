// routes/<resource>.routes.js
const express = require("express");
const controller = require("../controllers/productControllers");
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
