import React from "react";
import "./FoodItem.css";
import { assets } from "../../assets/frontend_assets/assets";

const FoodItem = ({ name, image, price, description }) => {
  return (
    <div className="food-list-item">
      <div className="food-list-img-container">
        <img className="food-item-img" src={image} alt="" />
        <img className="food-item-add" src={assets.add_icon_white} alt="" />
      </div>
      <div className="food-item-info">
        <div className="food-item-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
