// Purpose: Translate HTTP requests to service calls and return JSON responses.
const ProductsService = require('../Services/productServices');

// GET /api/products
async function list(req, res, next) { //Declare an asynchronous controller named list. Express will pass in the request, response, and the next error handler.
  try { //error handling block
    const items = await ProductsService.read(); //Call the service to fetch all products. await pauses until the Promise resolves and assigns the array to items. read comes from the file productServices
    return res.status(200).json({ items }); //Send HTTP 200 OK with a JSON body that wraps the array under the items key. return stops execution.
  } catch (err) { console.error("LIST /products failed:", err); next(err); } //If anything throws, forward the error to Express’s centralized error middleware.
}

// GET /api/products/:id
async function read(req, res, next) { 
  try {
    const id = Number(req.params.id); //Extract :id from the URL path parameters and coerce it to a number./ req is the request object in Express.
    // req.params is an object that contains the dynamic parts of the URL.The :id part is a route parameter.
    //req.params.id is always a string.
    //Even though it looks like a number, it is text.
    //To use the value as a real number (for comparisons, array search, or math), we convert it.
    //Number(req.params.id) converts that string into a real number.
    const item = ProductsService.findId(id); //Ask the service for that product record. uses findId from productServices file
    if (!item) return res.status(404).json({ error: 'Product not found' }); //If the service returns nothing, reply with 404 Not Found and stop.
    return res.status(200).json({ item });// Otherwise respond with 200 OK and the product wrapped under item.
  } catch (err) { next(err); }
}

// POST /api/products
async function create(req, res, next) {
  try {
    const payload = req.body;

    // Minimal validation example (adapt as needed)
    if (typeof payload.model !== 'string' || //This checks that model is a text value.
        !Number.isInteger(payload.year) || //This checks that year is an integer number.
        typeof payload.price !== 'number' || //This checks that price is a number.
        !Number.isInteger(payload.stock)) { //This checks that stock is also a whole number, just like year.
      return res.status(400).json({ error: 'Invalid payload' });
    }

    const item = await ProductsService.create(payload); //Ask the service to create the product and return the created record.
    return res.status(201).json({ item }); //Respond with 201 Created and the new product.
  } catch (err) { next(err); }
}

// PATCH /api/products/:id
async function update(req, res, next) {
  try {
    const id = Number(req.params.id);
    const patch = req.body; // Validate fields you allow to change. Read the patch object from the request body.

    const item = ProductsService.update(id, patch); //Call the service to apply the update and return the updated product (or null if not found).
    if (!item) return res.status(404).json({ error: 'Product not found' });
    return res.status(200).json({ item }); //If the product does not exist, respond 404 and stop.
  } catch (err) { next(err); }
}

// DELETE /api/products/:id
async function remove(req, res, next) {
  try {
    const id = Number(req.params.id);
    const ok = await ProductsService.remove(id); //Ask the service to delete the product. Expect a boolean indicating success.
    if (!ok) return res.status(404).json({ error: 'Product not found' }); //If deletion did not happen because the product does not exist, respond 404 and stop.
    return res.status(204).send(); // or: res.status(200).json({ ok: true })
  } catch (err) { next(err); }
}

module.exports = { list, read, create, update, remove };
