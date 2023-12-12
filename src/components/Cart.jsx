import React, { useContext } from "react";
import { CartContext } from "../context/Cart";

const Cart = () => {
  const cart = useContext(CartContext);
  const total = cart.items.reduce((a, b) => a + b.price, 0);
  return (
    <div>
      <h3>My Cart</h3>
      {cart &&
        cart.items.map((item) => (
          <li>
            {item.name} - {item.price}.RS
          </li>
        ))}
      <h2>Total Bill: {total}.RS</h2>
    </div>
  );
};
export default Cart;
