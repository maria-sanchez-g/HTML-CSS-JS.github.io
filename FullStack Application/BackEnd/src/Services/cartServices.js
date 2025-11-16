const cart = []

// Return a shallow copy of the cart
const getCart = () => { //Use getCart() when you want to safely show the cart to other parts of the program.
  return [...cart];
};

//find index of a product in a cart
const findIndex = (productId) => {
    return cart.findIndex ((item) => item.productId == productId) //Look inside each object in the cart, take the value inside the productId field, and compare it with the productId we are searching for
    };

//add one unit of a product
const addCart = (productId) => {
const index = findIndex (productId); //This line calls the findIndex function to check if the product is already in the cart.
if (index == -1) { //This checks whether the product is not in the cart. index === -1 means the product was not found.
    cart.push({ productId, qty: 1}); //If the product was not found, a new object is added to the cart.
} else {
    cart[index].qty += 1; //if the product is in the cart, this increases the quantity (qty) of the existing product by one. It means cart[index].qty = cart[index].qty + 1;
}
return getCart();
}

//delete
const deleteOne = (productId) => {
const index = findIndex (productId);
if (index == -1) {
return getCart(); //nothing to remove
}
cart[index].qty -= 1;
if (cart[index].qty == 0) { //if there is no item with that id, remove it from the cart. .qty accesses the quantity of that product in the cart.
    cart.splice(index, 1);
}
    return getCart()
}

//Delete all
const deleteAll = (productId) => {
  const index = findIndex(productId);
  if (index !== -1) cart.splice(index, 1);
  return getCart();
};

//clear cart
const clearCart = () => {
    cart.length = 0; //When you set the length property of an array to 0, it removes every element inside it.
    return getCart();
}

module.exports = {
    deleteAll, addCart, findIndex, getCart, deleteOne, clearCart
};