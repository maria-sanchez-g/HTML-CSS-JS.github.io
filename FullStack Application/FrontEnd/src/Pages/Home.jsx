import { useProducts } from "../Context/ProductContext";
import ProductGrid from "../Components/ProductGrid";

export default function Home() {
  const { items: products, loading, error } = useProducts(); //Reads products, loading, and error from context. Renames items to products for clarity.Renaming is optional.

  if (loading) return <div>Loading…</div>; //Shows a loading state while the data is being fetched.
  if (error)   return <div>Error: {error}</div>; //

  return <ProductGrid products={products} />;
}
