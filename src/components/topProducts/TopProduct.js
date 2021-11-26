import React from "react";
import "./TopProduct.style.css"

const TopProduct = ({product}) => {
  return (
    <article className="product">
      <div className="product__image">
        <img src={product.img} alt={product.title} />
      </div>
      <div className="product__content">
        <h3 className="product__content-title">{product.title}</h3>
        <p className="product__content-price">${product.price}</p>
      </div>
    </article>
  )
}

export default TopProduct
