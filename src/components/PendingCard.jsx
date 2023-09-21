import { useState } from "react";
import { Link } from "react-router-dom";

const TOKEN =
  "patjEsSqznCeKP4Tm.3498c9f837410cce65c273bfb3b6ea7b4203984e08ac1a3ed63de377edd64eaf";
const BASE_URL = "https://api.airtable.com/v0/app7Fu8VNb6BUxYbM";

export default function PendingCard({ item, refetchDataExceptDeleted, handleQuantityChange }) {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleMinus = () => {
    if (quantity > 1) {
      const newQuantity = parseInt(quantity) - 1;
      setQuantity(newQuantity);
      updateQuantity(newQuantity);
      handleQuantityChange(item.id, newQuantity);
    }
  };

  const handlePlus = () => {
    if (quantity < item.stocks) {
      const newQuantity = parseInt(quantity) + 1;
      setQuantity(newQuantity);
      updateQuantity(newQuantity);
      handleQuantityChange(item.id, newQuantity);
    }
  };

  const updateQuantity = async (quantity) => {
    const payload = {
      fields:{
        "quantity": `${quantity}`,
      }
    };
    console.log("id", item.id);
    const response = await fetch(`${BASE_URL}/cart/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify(payload)
    });
    await response.json();
  };

  const handleDelete = async () => {
    console.log(`remove ${item.title} from cart`);
    
    const decision = window.confirm("Are you sure?");

    if (!decision) {
      return;
    }
    
    const response = await fetch(`${BASE_URL}/cart/${item.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    await response.json();

    refetchDataExceptDeleted(item.id);
  };

  

  return <div className="cart-card">
    <div>
    <Link to={`/products/${item.productid}`}><img className="cart-img" src={item.thumbnail} alt={item.id} /></Link>
    <div>
      <p className="title" >{item.title}</p>
      <p className="price">${item.price}</p>

      <div className="quantity">
        <button onClick={handleMinus} style={{borderRight: "1px solid rgba(0,0,0,.14)"}} >-</button>
        <input type="text" min="1" max={item.stocks} value={quantity} />
        <button onClick={handlePlus} style={{borderLeft: "1px solid rgba(0,0,0,.14)"}}>+</button>
      </div>

      <p>stock left: {item.stocks-quantity}</p>
    </div>
    </div>
    <div>
      <button className="delete-button" onClick={handleDelete}>remove from cart</button>
    </div>
  </div>
}