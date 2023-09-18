import { useNavigate } from "react-router-dom";
import NavigateToCart from "../components/NavigateToCart";

export default function LandingPage({ fetchProducts }) {
  const navigate = useNavigate();


  const browseProducts = () => {
    fetchProducts();
    navigate("/products");
  };

  const searchProducts = () => {
    navigate("/search");
  };

  return <div className="landing-page">
    <h1>Lazapee</h1>
    <p>shop now</p>
    <button onClick={searchProducts}>Search Products</button>
    <button onClick={browseProducts} >Browse Products</button>
    <NavigateToCart />
  </div>
}
