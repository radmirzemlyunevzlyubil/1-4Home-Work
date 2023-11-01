import React from "react";

const Cart = ({ cartItems }) => {
  return (
    <div className="cart-container">
      <h2>Корзина</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.title} - {item.price} ₽
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
