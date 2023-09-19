import { useEffect, useState } from "react";
import NavigateToCart from "../../components/NavigateToCart";
import ProductCard from "../../components/ProductCard";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  const BASE_URL = "https://dummyjson.com";

  useEffect(() => {
    const fetchProducts = async () => {
      const request = await fetch(`${BASE_URL}/products`);
        const data = await request.json();
        // console.log(data);
        setProducts(data.products);
    };
    fetchProducts();
  }, []);

  return <div className="products-page">
    <h2>products page</h2>
    <NavigateToCart />
    {products?.map(product => <ProductCard key={product.id} product={product} />)}
    
  </div>
}