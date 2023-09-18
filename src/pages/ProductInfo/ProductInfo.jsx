import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarRating from "../components/StarRating";
import Carousel from "../components/Carousel";

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
        console.log(data);
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

  const {product, isLoading, isError}  = useFetchProduct(id);

  if (isLoading) {
    return <progress />;
  }

  if (isError) {
    return <h2>Something went wrong...</h2>;
  }

  return <div>
    product info page
    {/* image carousel */}
    {/* <Carousel images={product.images} /> */}
    <h3>{product.title}</h3>
    <StarRating score={product.rating} />
    <p>${product.price}</p>
    <p>{product.brand}</p>
    <p>{product.description}</p>
    {/* <p>{product.images}</p> */}

  </div>
}