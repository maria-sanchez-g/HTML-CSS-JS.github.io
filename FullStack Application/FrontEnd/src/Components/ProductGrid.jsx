import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={2}>
        {products.map((p) => (
          <Grid item key={p.id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard product={p} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
