import React from "react";
import { useState } from "react";

const MyComponent = () => {
  let [name, setName] = useState("Guest");
  let [quantity, setQuantity] = useState(1);
  let [comment, setComment] = useState("");
  let [payment, setPayment] = useState("Visa");
  let [shipping, setShipping] = useState("Delivery");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }

  function handleShippingChange(event) {
    setShipping(event.target.value);
  }

  return (
    <div>
      <input type="text" value={name} onChange={handleNameChange} />
      <p>Name : {name} </p>

      <input type="number" value={quantity} onChange={handleQuantityChange} />
      <p>Quantity : {quantity}</p>

      <textarea
        name=""
        id=""
        placeholder="Leave the package on the doorstep"
        value={comment}
        onChange={handleCommentChange}
      ></textarea>
      <p>Comment : {comment} </p>

      <select name="" id="" value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option </option>
        <option value="Visa">Visa</option>
        <option value="MasterCard">MasterCard</option>
        <option value="GiftCard">GiftCard</option>
      </select>
      <p>Payment : {payment} </p>

      <label>
        <input
          type="radio"
          value="Pick Up"
          checked={shipping === "Pick Up"}
          onChange={handleShippingChange}
        />
        Pick Up
      </label>

      <br />
      <label htmlFor="">
        <input
          type="radio"
          value="Pick Up"
          checked={shipping === "Delivery"}
          onChange={handleShippingChange}
        />
        Delivery
      </label>
      <p>Shipping : {shipping} </p>
    </div>
  );
};

export default MyComponent;
