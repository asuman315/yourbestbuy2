// Import the `ProductCard` shared component so that it's accessible to `ProductList`.
import ProductCard from './ProductCard';
// The `ProductList` component accepts `products` as a prop.
export default function ProductList({products}) {
  // Return a list of products organized in a three-column grid.
  return (
    <div className="grid grid-cols-autofill-sm  md:grid-cols-autofill-lg gap-4">
      {products.map((product) => (
        // Each product card maps to a product in the storefront.
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
