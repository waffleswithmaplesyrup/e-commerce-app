import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import LandingPage from "./pages/LandingPage/LandingPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import ProductInfo from "./pages/ProductInfo/ProductInfo";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";

function App() {

  //* move this whole code to products page
  const [products, setProducts] = useState([]);

  const BASE_URL = "https://dummyjson.com";

  // const BASE_URL = "http://localhost:3000";

  const fetchProducts = async () => {
    const request = await fetch(`${BASE_URL}/products`);
      const data = await request.json();
      // console.log(data);
      setProducts(data.products);
  };
  //* move this whole code to products page


  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage fetchProducts={fetchProducts} />} />
        <Route path="/products" element={<ProductsPage products={products} />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/products/:id" element={<ProductInfo />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </div>
  )
}

export default App