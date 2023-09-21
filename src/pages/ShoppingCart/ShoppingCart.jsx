import { useEffect, useState } from "react";
import PendingCard from "../../components/PendingCard";
import Navbar from "../../components/Navbar";

const TOKEN =
  "patjEsSqznCeKP4Tm.3498c9f837410cce65c273bfb3b6ea7b4203984e08ac1a3ed63de377edd64eaf";
const BASE_URL = "https://api.airtable.com/v0/app7Fu8VNb6BUxYbM";

export default function ShoppingCart() {

  const [cartItems, setCartItems] = useState([]);

  const [total, setTotal] = useState(0);

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
    };
    
    fetchCart();
  }, []);

  const refetchDataExceptDeleted = (id) => {
    setCartItems(cartItems.filter( item => item.id !== id));
  };

  useEffect(() => {
    if (cartItems) {
      setTotal(cartItems.reduce((accum, curr) => accum + curr.price*curr.quantity, 0));
    }
  }, [cartItems]);

  const handleQuantityChange = (itemId, newQuantity) => {

    const updatedCartItems = cartItems?.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    setCartItems(updatedCartItems);

    const newTotal = updatedCartItems.reduce((accum, curr) => accum + curr.price*curr.quantity, 0);

    setTotal(newTotal);
  };

  return <>
    <Navbar page="Shopping Cart" />
    <p></p>
    <div key="cart-items" className="cart-container">
      {/* render stored data from air table */}
      {cartItems?.map(item => 
        <PendingCard 
        key={item.id} 
        item={item} 
        refetchDataExceptDeleted={refetchDataExceptDeleted} 
        handleQuantityChange={handleQuantityChange} 
        />)}
    </div>
    <div className="check-out">
      Total:<span>$ {total}</span> <button>Check Out</button>
    </div>
  </>
}

