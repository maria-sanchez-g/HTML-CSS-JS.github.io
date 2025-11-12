// src/Pages/Cart.jsx
import { Container, Typography, Button, Stack } from "@mui/material";
import { useCart } from "../Context/cartContext"; // note the exact filename/casing

export default function Cart() {
  const { cart, addOne, removeOne, removeAll } = useCart();

  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <Container sx={{ paddingY: 4 }}>
      <Typography variant="h4" gutterBottom>My Cart</Typography>

      {cart.length === 0 && <p>Your cart is empty.</p>}

      {cart.map((item) => (
        <div key={item.productId}>
          <p>Product: {item.productId}</p>
          <p>Quantity: {item.qty}</p>

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
    </Container>
  );
}

