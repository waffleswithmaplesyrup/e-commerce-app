import { useEffect, useState } from "react";
import PendingCard from "../components/PendingCard";

const TOKEN =
  "patjEsSqznCeKP4Tm.3498c9f837410cce65c273bfb3b6ea7b4203984e08ac1a3ed63de377edd64eaf";
const BASE_URL = "https://api.airtable.com/v0/app7Fu8VNb6BUxYbM";

export default function ShoppingCart() {

  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState();
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    const fetchCart = async () => {
      const response = await fetch(`${BASE_URL}/cart`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
      });
      const jsonData = await response.json();
      const cartData = jsonData.records.map((data) => ({
        ...data.fields,
        id: data.id,
      }));
      setCartItems(cartData);
      setTotal(addTotal(cartData));
      setRefresh(refresh + 1);
    };
    fetchCart();
  }, [refresh]);

  return <>
  {/* render stored data from air table */}
  {cartItems?.map(item => <PendingCard key={item.id} item={item} />)}
  <p>total: ${total}</p>
  </>
}

function addTotal(items) {
  let total = 0;
  items.forEach( item => {
    total += parseInt(item.price)*parseInt(item.quantity)
  });

  return total;
}