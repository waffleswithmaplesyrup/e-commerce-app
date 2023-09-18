import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import NavigateToCart from "../components/NavigateToCart";

export default function LandingPage() {
  return <div className="landing-page">
    <h1>Lazapee</h1>
    <p>shop now</p>
    <SearchBar />
    <Link to="/products"><button>Browse Products</button></Link>
    <NavigateToCart />
  </div>
}
