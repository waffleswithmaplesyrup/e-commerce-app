import { Link } from "react-router-dom";
import StarRating from "../components/StarRating";

export default function ProductCard({ product }) {
  return (
  <Link to={`/products/${product.id}`} className="product-card">
    <img src={product.thumbnail} alt={product.title} />
    <h3>{product.title}</h3>
    <h4>${product.price}</h4>
    <StarRating score={product.rating} />
  </Link>
  );
}

