const express = require("express");
const router = express.Router();
const controller = require("../controllers/cartControllers");

router.get("/", controller.getCart);
router.post("/remove-all", controller.removeAll);   // remove all
router.post("/:productId", controller.add);         // add one
router.delete("/:productId", controller.removeOne); // remove one
router.delete("/", controller.clear);

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