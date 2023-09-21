import { Link } from "react-router-dom";

export default function NavigateToCart() {
  return <>
  <Link to="/cart">
  <img src="../../public/shopping-cart.png" alt="cart-icon" /></Link>
  </>;
}