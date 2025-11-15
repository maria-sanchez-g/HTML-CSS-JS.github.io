import { useContext } from "react";
import { Card, CardContent, CardMedia, CardActions, Button, Typography, Chip, Stack } from "@mui/material";
import { useCart } from "../Context/CartContext";

export default function ProductCart({ product }) {
  //IMPORTANTconst { dispatch, items: cartItems } = useContext(CartContext); //Reads the cart context. Extracts the dispatch function and the items array, renaming it to cartItems, for clarity, i don't have to rename it.

  //IMPORTANTconst qtyInCart = cartItems.find(r => r.productId === product.id)?.qty || 0; //Searches the cart for this product’s line. If found, reads its qty. If not found, uses 0.
  const { cart, addOne, removeOne } = useCart();
  const qtyInCart = cart.find(r => r.productId === product.id)?.qty || 0;
  const outOfStock = product.stock === 0;

//IMPORTANT   const addOne = () => {
//     dispatch({ type: "ADD_ONE", payload: { productId: product.id } }); //Defines the click handler that sends an ADD_ONE action with this product’s id to the cart reducer.
  
// const deleteOne = () => {
//     dispatch({ type: "REMOVE_ONE", productId: product.id });
//     const outOfStock = product.stock === 0; //Precomputes a boolean to disable the button and show a label when there is no stock.
// };
 
  const handleAdd = () => addOne(product.id);
  const handleRemoveOne = () => removeOne(product.id);

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardMedia component="img" height="160" image={product.image} alt={product.model} />
      <CardContent sx={{ flexGrow: 1 }}>
        <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
          <Typography variant="h6">{product.model}</Typography>
          {qtyInCart > 0 && <Chip size="small" label={`In cart: ${qtyInCart}`} />}
        </Stack>
        <Typography variant="body2" color="text.secondary">
          {product.desc || `${product.year} • Stock: ${product.stock}`}
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 1 }}>
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleAdd} variant="contained" fullWidth>Add to Cart</Button>
        <Button onClick={handleRemoveOne} disabled={qtyInCart === 0} variant="outlined" fullWidth>Delete</Button> 
      </CardActions>
    </Card>
  );
}
//Disable (gray out) the button when the quantity of this product in the cart is zero.