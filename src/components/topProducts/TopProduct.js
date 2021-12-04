import React from "react";
import "./TopProduct.style.css";

const TopProduct = ({ product }) => {
  return (
    <article className="top-product">
      <div className="top-product__image">
        <img src={product.img} alt={product.title} />
      </div>
      <div className="top-product__content">
        <h3 className="top-product__content-title">{product.title}</h3>
        <p className="top-product__content-price">${product.price}</p>
      </div>
    </article>
  );
};

export default TopProduct;
