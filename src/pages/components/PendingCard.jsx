import { useState } from "react";
import StarRating from "./StarRating";

const TOKEN =
  "patjEsSqznCeKP4Tm.3498c9f837410cce65c273bfb3b6ea7b4203984e08ac1a3ed63de377edd64eaf";
const BASE_URL = "https://api.airtable.com/v0/app7Fu8VNb6BUxYbM";

export default function PendingCard({ item }) {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleChange = async (event) => {
    setQuantity(event.target.value);

    const payload = {
      fields:{
        "quantity": event.target.value,
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

  const handleClick = async () => {
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
  };

  return <div className="purchasing">
  <img src={item.thumbnail} alt={item.id} />
  <h3>{item.title}</h3>
  <p>${item.price}</p>
  <StarRating score={item.rating} />
  <p>quantity:</p>
  <input type="number" min="1" max={item.stocks} value={quantity} onChange={handleChange}/>
  <p>stock left: {item.stocks-quantity}</p>
  <button onClick={handleClick}>remove from cart</button>
  </div>
}