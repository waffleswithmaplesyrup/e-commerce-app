import { Route, Routes } from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ProductInfo from "./pages/ProductInfo/ProductInfo";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductInfo />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </div>
  )
}

export default App