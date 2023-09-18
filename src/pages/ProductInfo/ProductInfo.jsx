import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StarRating from "../components/StarRating";
// import Carousel from "../components/Carousel";

function useFetchProduct(id) {
  const [product, setProduct] = useState({});
  const [status, setStatus] = useState("idle");

  const BASE_URL = "https://dummyjson.com";

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setStatus("loading");
        const url = `${BASE_URL}/products/${id}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }

        const data = await response.json();
        setStatus("success");
        setProduct(data);
      } catch (error) {
        setStatus("error");
      }
    };
    fetchProduct();

  }, [id]);

  const isLoading = status === "loading";
  const isError = status === "error";

  return {product, isLoading, isError};
}


export default function ProductInfo() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {product, isLoading, isError}  = useFetchProduct(id);

  if (isLoading) {
    return <progress />;
  }

  if (isError) {
    return <h2>Something went wrong...</h2>;
  }

  const handleAdd = () => {
    console.log(`add ${product.title} to cart`);

    navigate("/cart");
  };

  return <div>
    <img src={product.thumbnail}  alt={product.id} />
    {/* <Carousel images={product.images} /> */}
    {product.images?.map(image => <img key={image} src={image} alt={image} />)}
    <h3>{product.title}</h3>
    <p>price: ${product.price}</p>
    <StarRating score={product.rating} />
    <p>brand: {product.brand}</p>
    <p>Description: {product.description}</p>
    <p>stocks left: {product.stock}</p>
    <button onClick={handleAdd} >Add to Cart</button>

  </div>
}