import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./SingleProduct.style.css";

import { Color } from "../../ui";
import { products } from "../../data";
import CartContext from "../../context/cart-context/CartContext";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart, cartItems } = useContext(CartContext);

  useEffect(() => {
    const getProduct = () => {
      const product = products.find((p) => p.id === Number(id));
      return product;
    };
    setProduct(getProduct);
  }, [id]);

  if (product) {
    return (
      <section id="product">
        <div className="product container">
          <div className="product__path">
            <Link to="/" className="product__path-link">
              home
            </Link>
            <span className="product__path-link">/</span>
            <Link to="/products" className="product__path-link">
              products
            </Link>
            <span className="product__path-link">/</span>
            <Link to={`/products/${id}`} className="product__path-link">
              {product.title}
            </Link>
          </div>
          <div className="product__content">
            <div className="product__content__block">
              <div className="product__content__block__img">
                <img
                  src="https://cdn.shopify.com/s/files/1/0339/0901/products/shopdressup_mock_neck_bodysuit-12_1800x1800.jpg?v=1636772362"
                  alt=""
                />
              </div>
            </div>
            <div className="product__content__block">
              <div className="product__content__block__row">
                <h3 className="product__content__block__row-title">
                  {product.title}
                </h3>
                <p className="product__content__block__row-price">
                  $ {product.price}
                </p>
              </div>
              <div className="product__content__block__row">
                <p className="product__content__block__row-filter">color</p>
                <div className="colors">
                  {product.colors.map((color, idx) => (
                    <Color key={idx} color={color} />
                  ))}
                </div>
              </div>
              <div className="product__content__block__row">
                <p className="product__content__block__row-filter">size</p>
                <div className="size__buttons">
                  {/* <button className="btn-size active">Small</button> */}
                  {product.sizes.map((size, idx) => (
                    <button
                      key={idx}
                      className={`btn-size ${idx === 0 && "active"}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div className="product__content__block__row">
                <button
                  className="btn-add-to-cart"
                  onClick={() => addToCart({ ...product, amount: 1 })}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section id="product">
      <div className="product container">
        <div>loading...</div>
      </div>
    </section>
  );
};

export default SingleProduct;
