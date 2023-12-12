import React, { useContext } from "react";
import { CartContext } from "../context/Cart";
const Item = (props) => {
  const cart = useContext(CartContext);
  return (
    <div>
      <h4>Item Name :- {props.name}</h4>
      <p>Price :- {props.price} .RS</p>
      <button
        onClick={() =>
          cart.setItems([
            ...cart.items,
            { name: props.name, price: props.price },
          ])
        }
      >
        Add To Cart
      </button>
    </div>
  );
};
export default Item;
