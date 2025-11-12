const express = require("express");
const controller = require("../controllers/cartControllers");
const router = express.Router();

// Exact endpoints the frontend is calling
router.get("/", controller.getCart);               // list cart
router.post("/add", controller.add);               // add one (reads req.body.productId)
router.post("/remove", controller.removeOne);      // remove one (reads req.body.productId)
router.post("/remove-all", controller.removeAll);  // remove all of a product
router.post("/reset", controller.clear);           // clear entire cart

module.exports = router;
