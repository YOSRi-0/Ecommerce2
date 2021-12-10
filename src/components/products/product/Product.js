import React from "react";
import { Link } from "react-router-dom";
import "./Product.style.css";

const Product = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`}>
      <div key={product.id} className="grid__item">
        <div className="grid__item-img">
          <img
            src="https://cdn.shopify.com/s/files/1/0339/0901/products/shopdressup_nashville_baseball_cap_1800x1800.jpg?v=1635033011"
            alt=""
          />
        </div>
        <div className="grid__item__info">
          <h6 className="grid__item__info-title">{product.title}</h6>
          <p className="grid__item__info-price">${product.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Product;
