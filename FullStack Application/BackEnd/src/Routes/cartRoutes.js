const express = require("express");
const controller = require("../controllers/cartControllers");
const router = express.Router();

router.get("/", controller.getCart);            // GET all cart items
router.post("/:productId", controller.add);     // Add one unit
router.delete("/:productId", controller.removeOne); // Remove one unit
router.delete("/", controller.clear);           // Clear entire cart

module.exports = router;
