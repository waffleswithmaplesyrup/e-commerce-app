import { useState } from "react";
import ProductCard from "../../components/ProductCard";
import NavigateToCart from "../../components/NavigateToCart";
import Categories from "../../components/Categories";
import SearchBar from "../../components/SearchBar";

export default function SearchPage() {
  const [products, setProducts] = useState([]);
  const [result, setResult] = useState("");

  const BASE_URL = "https://dummyjson.com";

  const filterBySearch = async (search) => {
    const response = await fetch(`${BASE_URL}/products/search?q=${search}`);
    const data = await response.json();
    setProducts(data.products);

    if (products.length === 0) {
      setResult("no results found");
    }
  };

  const filterByCategory = async (category) => {

    const response = await fetch(`${BASE_URL}/products/category/${category}`);
    const data = await response.json();
    setProducts(data.products);
  };

  return <>

    <SearchBar filterBySearch={filterBySearch} />

    <Categories filterByCategory={filterByCategory} />

    <NavigateToCart />
    { products?.map(product => <ProductCard key={product.id} product={product}/>) }
    <p>{result}</p>
  </>
}