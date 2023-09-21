import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import NavigateToCart from "../../components/NavigateToCart";
import Categories from "../../components/Categories";
import SearchBar from "../../components/SearchBar";
import Sort from "../../components/Sort";
import Logo from "../../components/Logo";
import Footer from "../../components/Footer";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [result, setResult] = useState("");

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

  const filterBySearch = async (search) => {
    const response = await fetch(`${BASE_URL}/products/search?q=${search}`);
    const data = await response.json();
    setProducts(data.products);

    if (data.products.length !== 0) {
      setResult("");
    } else {
      setResult("no results found");
      
    }
  };

  const filterByCategory = async (category) => {
    const response = await fetch(`${BASE_URL}/products/category/${category}`);
    const data = await response.json();
    setProducts(data.products);
    setResult("");
  };

  const sortByPrice = (sortedProducts) => {
    setProducts(sortedProducts);
  };

  return <>
    <nav className="navbar">
      <Logo />

      <div className="data-manip">
        <Categories filterByCategory={filterByCategory} />
        <SearchBar filterBySearch={filterBySearch} />
        <Sort products={products} sortByPrice={sortByPrice} />
      </div>

      <NavigateToCart />
    </nav>

    <p className="no-result">{result}</p>
    <div className="products-container">
      { products?.map(product => <ProductCard key={product.id} product={product}/>) }
    </div>
    <Footer />
  </>
}

