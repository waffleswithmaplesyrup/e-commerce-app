import NavigateToCart from "../components/NavigateToCart";
import ProductCard from "../components/ProductCard";

export default function ProductsPage({ products }) {

  return <div className="products-page">
    <h2>products page</h2>
    <NavigateToCart />
    {products?.map(product => <ProductCard key={product.id} product={product} />)}
    
  </div>
}