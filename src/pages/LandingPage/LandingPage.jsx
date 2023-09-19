import { Link } from "react-router-dom";
import NavigateToCart from "../../components/NavigateToCart";

export default function LandingPage() {

  return <div className="landing-page">
    <h1>Lazapee</h1>
    <p>shop now</p>
    <Link to="/search" >Search Products</Link>
    <Link to="/products" >Browse Products</Link>
    <NavigateToCart />
  </div>
}
