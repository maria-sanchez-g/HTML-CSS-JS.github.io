// Purpose: Expose cart operations and return totals with each response.
const CartService = require('../Services/cartServices'); //We import the service modules so this controller can call the cart logic and product lookup logic
const ProductsService = require('../Services/productServices');

// Helper: compute totals using your products service for prices. Its purpose is to calculate the total quantity of items in the cart and the total price
async function withTotals(items) { //We declare a helper function that takes the current cart items and calculates:
  let totalQty = 0; //totalQty will store the sum of all quantities in the cart
  let totalPrice = 0; //totalPrice will store the sum of all item costs.

  for (const row of items) { //We loop over each item in the cart.
    totalQty += row.qty; //For each item, we add its quantity to totalQty.This increases the total quantity by the quantity of the current item.
    const product = ProductsService.findId(row.productId); //ProductsService.readById() is a function that searches for that product. await is used because this operation might take time (for example, database read).
    if (product) totalPrice += product.price * row.qty; //If the product exists, we multiply the price by the quantity and add the result to totalPrice
  }

  return { items, totalQty, totalPrice }; //We return a final structured JSON object containing the items and both totals.
}

// GET /api/cart
async function getCart(req, res, next) { //This controller handles returning the current cart. We call the service function that returns a shallow copy of the cart array.
  try {
    const items = CartService.getCart();
    const body = await withTotals(items);
    return res.status(200).json(body);
  } catch (err) { next(err); }
}

// POST /api/cart/:productId  (add one unit)
async function add(req, res, next) {
  try {
    const productId = Number(req.params.productId);
    const product = ProductsService.findId(productId);
    if (!product) return res.status(404).json({ error: 'Product not found' });

    const items = CartService.addCart(productId);
    const body = await withTotals(items);
    return res.status(200).json(body);
  } catch (err) {
    next(err);
  }
}

// DELETE /api/cart/:productId  (remove one unit)
async function removeOne(req, res, next) {
  try {
    console.log("DELETE /cart/:productId params ->", req.params);
    const productId = Number(req.params.productId); //Extract and convert the product ID from the URL.
    const items = CartService.deleteOne(productId); // match your service name. Call the cart service to remove one unit. If quantity becomes zero, the service removes the item entirely.
    const body = await withTotals(items);
    return res.status(200).json(body);
  } catch (err) { next(err); }
}

// DELETE /api/cart  (clear cart)
async function clear(req, res, next) {
  try {
    const items = CartService.clearCart(); //Call the service to empty the entire cart.
    const body = await withTotals(items); //Totals will now be zero.
    return res.status(200).json(body); //Send back the now-empty cart.
  } catch (err) { next(err); }
}

// POST /api/cart/remove-all
async function removeAll(req, res, next) {
  try {
    console.log("POST /cart/remove-all body ->", req.body);
    const productId = Number(req.body.productId);    // ← from body
    const items = CartService.deleteAll(productId);  // or your equivalent service fn
    const body = await withTotals(items);
    return res.status(200).json(body);
  } catch (err) { next(err); }
}
module.exports = { getCart, add, removeOne, clear, removeAll };


// ✅ 1. When we use req.params

// We use params when the productId is part of the URL path.

// Example route:

// POST /api/cart/5


// In Express, that route is written like:

// router.post("/cart/:productId", controller.add);


// The :productId in the URL means:

// ➤ The value must be read using:

// req.params.productId;


// That is why these functions use params:

// ✔ add

// Route:

// POST /api/cart/:productId


// Controller:

// const productId = Number(req.params.productId);

// ✔ deleteOne

// Route:

// DELETE /api/cart/:productId


// Controller:

// const productId = Number(req.params.productId);


// It is because the product ID is literally in the URL.

// ✅ 2. When we use req.body

// We use body when:

// The route does NOT contain the productId in the URL

// The client must send the productId inside the body of the request

// Example route:

// POST /api/cart/remove-all


// There is no productId in the URL.
// So you must send a body like this:

// {
//   "productId": 3
// }


// And the controller must read:

// const productId = Number(req.body.productId);


// This is why deleteAll() uses body.

// 📌 Summary Table
// Function	Route URL	Where ID lives	Read from
// add	/api/cart/:productId	In the URL	req.params.productId
// deleteOne	/api/cart/:productId	In the URL	req.params.productId
// clear	/api/cart	No ID needed	none
// deleteAll	/api/cart/remove-all	Not in the URL → must come in body	req.body.productId
// getCart	/api/cart	No ID	none
// ✔ Why your teacher does this

// Your teacher uses:

// params for REST operations affecting one item
// Example: /products/:id, /cart/:productId

// body when the operation is not tied to a specific URL structure
// Example: /cart/remove-all (needs data in the body)

// This is standard REST API design.