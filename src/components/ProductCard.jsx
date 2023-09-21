import { Link } from "react-router-dom";
import StarRating from "../components/StarRating";

export default function ProductCard({ product }) {
  return (
  <Link to={`/products/${product.id}`} className="product-card">
    <img src={product.thumbnail} alt={product.title} />
    <div>
      <p className="title" >{product.title}</p>
      <p className="price" >${product.price}</p>
      <p className="rating" ><StarRating score={product.rating} /></p>
    </div>
  </Link>
  );
}

