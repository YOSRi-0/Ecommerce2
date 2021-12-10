import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/cart-context/CartContext";
import "./Cart.style.css";
import CartItem from "./CartItem";
import priceFormatter from "../../utils/PriceFormatter";

const Cart = () => {
  const { cartItems, removeItem } = useContext(CartContext);
  let total = 0;
  total = cartItems.reduce(
    (previousTotal, currentItem) =>
      previousTotal + currentItem.price * currentItem.amount,
    0
  );

  const formattedTotal = priceFormatter.format(total);
  const totalForStripe = total * 100;

  return (
    <section id="cart">
      <div className="cart container">
        <div className="cart__path">
          <Link to="/" className="cart__path-link">
            home
          </Link>
          <span className="cart__path-link">/</span>
          <Link to="/cart" className="cart__path-link">
            cart
          </Link>
        </div>
        {cartItems.length ? (
          <div className="cart__content">
            <div className="cart__products">
              {cartItems.map((item, idx) => (
                <CartItem key={idx} index={idx} item={item} />
              ))}
            </div>
            <div className="cart__checkout">
              <div className="cart__checkout__shipping">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="cart__checkout__total">
                <span>total</span>
                <span>{formattedTotal}</span>
              </div>
              <button className="btn-checkout">Checkout</button>
            </div>
          </div>
        ) : (
          <div className="empty-message">Cart is Empty ...</div>
        )}
      </div>
    </section>
  );
};

export default Cart;
