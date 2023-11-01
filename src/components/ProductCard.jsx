import React from "react";
import "../styles/ProductCard.scss";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";

const ProductCard = ({ title, price, image }) => {
  return (
    <div className="card">
      <div className="card-top">
        <p className="new-text">Новинка</p>
        <div className="heart-icon">
          <AiOutlineHeart fontSize={30} color="#DEDBDB" />
        </div>
      </div>
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="card-bottom">
        <h3>{title}</h3>
        <div className="price-cart">
          <span className="card-price">{price} ₽</span>
          <Link to="/cart" className="cart">
            <FiShoppingCart fontSize={30} className="cart-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
