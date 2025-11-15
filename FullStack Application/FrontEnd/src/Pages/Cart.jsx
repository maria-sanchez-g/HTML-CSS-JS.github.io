// src/Pages/Cart.jsx
import { Container, Typography, Button, Stack } from "@mui/material";
import { useCart } from "../Context/CartContext"; // note the exact filename/casing
import { useProducts } from "../Context/ProductContext.jsx";

export default function Cart() {
  const { cart, addOne, totalQty, groupedLines, totalPrice, removeOne, removeAll } = useCart();
  const { items: products } = useProducts();
    // Cart lines joined with full product info (price, model, etc.)
  const lines = groupedLines(products);
   // Calculate total money value of the cart
  const grandTotal = totalPrice(products);

  return (
    <Container sx={{ paddingY: 4 }}>
      <Typography variant="h4" gutterBottom>My Cart</Typography>

      {cart.length === 0 && <p>Your cart is empty.</p>}

      {cart.map((item) => (
        <div key={item.productId}>
          <p>Product: {item.productId}</p>
          <p>Quantity: {item.qty}</p>
          <p>Price: {item.price}</p>

          <Stack direction="row" spacing={1}>
            <Button variant="outlined" onClick={() => addOne(item.productId)}>+</Button>
            <Button variant="outlined" onClick={() => removeOne(item.productId)}>-</Button>
            <Button variant="text" color="error" onClick={() => removeAll(item.productId)}>
              Remove All
            </Button>
          </Stack>

          <hr />
        </div>
      ))}

      <Typography variant="h6">Total items in cart: {totalQty}</Typography>
      <Typography variant="h6">Total price: ${grandTotal.toFixed(2)}</Typography>
    </Container>
  );
}

