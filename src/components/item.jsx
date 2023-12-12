import React from "react";

const Item = (props) => {
  return (
    <div>
      <h4>Item Name :- {props.name}</h4>
      <p>Price :- {props.price} .RS</p>
      <button>Add To Cart</button>
    </div>
  );
};
export default Item;
