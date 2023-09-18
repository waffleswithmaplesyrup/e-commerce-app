import { useContext } from "react";
import SearchBar from "../components/SearchBar";
import NavigateToCart from "../components/NavigateToCart";
import ProductCard from "../components/ProductCard";
import { DataContext } from "../../Context/DataContext";

export default function ProductsPage() {
  const { keyword, products } = useContext(DataContext);

  return <div className="products-page">
    <h2>products page</h2>

    <SearchBar />
    <NavigateToCart />

    {products.length === 0 && <p>no results found for {keyword} :(</p>}
    {products.map(product => <ProductCard key={product.id} product={product} />)}
    
  </div>
}