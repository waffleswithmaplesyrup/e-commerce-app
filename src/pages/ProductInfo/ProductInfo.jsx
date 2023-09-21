import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StarRating from "../../components/StarRating";
import Navbar from "../../components/Navbar";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";

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

  const handleAdd = async () => {
    console.log(`add ${product.title} to cart`);

    const TOKEN = "patjEsSqznCeKP4Tm.3498c9f837410cce65c273bfb3b6ea7b4203984e08ac1a3ed63de377edd64eaf";
    const BASE_URL = "https://api.airtable.com/v0/app7Fu8VNb6BUxYbM";

    const payload = {
      "fields": {
        "productid": `${product.id}`,
        "title": product.title,
        "description": product.description,
        "price": `${product.price}`,
        "rating": `${product.rating}`,
        "quantity": "1",
        "stocks": `${product.stock}`,
        "thumbnail": product.thumbnail
      }
    };

    const response = await fetch(`${BASE_URL}/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify(payload),
    });
    await response.json();

    navigate("/cart");
  };

  const array = [{a:1, b:2}, {a:2, b:3}];
  const finda1 = array.findIndex(object => object.a === 0);
  console.log(finda1);

  return <>
    <Navbar page={product.title} />
    <p></p>
    <div className="product-info">
      <Carousel images={product.images} />
      <div className="info-container">
        <div>
          <p className="title">{product.title}</p>
          <p className="price">price: ${product.price}</p>
          <div>
            <StarRating score={product.rating} /> <span>{product.rating}</span>
          </div>
          <p>brand: {product.brand}</p>
          <p>Description: {product.description}</p>
          <p>stocks left: {product.stock}</p>
        </div>
        <button onClick={handleAdd} >Add to Cart</button>
      </div>
    </div>
    <Footer />
  </>
}