import { Route, Routes } from "react-router-dom";
import { DataContext } from "./Context/DataContext";
import { useState, useEffect } from "react";
import LandingPage from "./pages/LandingPage/LandingPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ProductInfo from "./pages/ProductInfo/ProductInfo";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";

function App() {
  const [data, setData] = useState(
    { 
      keyword: "", 

      updateKeyword: function(newKeyword) {
        setData({...data, keyword: newKeyword});
      },

      products: [],

    }
  );

  // function useFetchProducts(keyword) {
  
    // const BASE_URL = "http://localhost:3000";
    const BASE_URL = "https://dummyjson.com";
  
    const search_url = data.keyword === "" ? "" : `/search?q=${data.keyword}`;
  
    useEffect(() => {
      const fetchProducts = async () => {
          const response = await fetch(`${BASE_URL}/products${search_url}`);
          if (!response.ok) {
            throw new Error("Network response was not ok :(");
          }
          const payload = await response.json();
          // setProducts(data.products);
          console.log(payload.products);
          
          setData({...data, products: payload.products});

      };
      fetchProducts();
    }, [search_url]);

  return (
    <div>
    <DataContext.Provider value={data}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path={"/products/search/"} element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductInfo />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </DataContext.Provider>

    </div>
  )
}

export default App