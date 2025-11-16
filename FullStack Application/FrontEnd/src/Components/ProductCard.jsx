import { Card, CardContent, CardMedia, CardActions, Button, Typography, Chip, Stack } from "@mui/material";
import { useCart } from "../Context/CartContext";

export default function ProductCard({ product }) {
const { addOne, removeOne, countPerProduct } = useCart();
const qtyInCart = countPerProduct(product.id);
const outOfStock = product.stock === 0;

const handleAdd = () => addOne(product.id);
const handleRemove = () => removeOne(product.id);
//addOne and removeOne come from your CartContext. //So handleAdd simply calls addOne(product.id) when you click Add,
  
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
        <Button onClick={handleAdd} disabled={outOfStock} variant="contained" fullWidth>
          Add
        </Button>
        <Button onClick={handleRemove} disabled={outOfStock} variant="outlined" fullWidth>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
//Disable the “Add to Cart” button when the product is out of stock.