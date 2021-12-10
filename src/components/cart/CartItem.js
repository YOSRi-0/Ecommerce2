import React, { useContext, useState } from "react";
import CartContext from "../../context/cart-context/CartContext";
import "./Cart.style.css";
import priceFormatter from "../../utils/PriceFormatter";

const CartItem = ({ index, item }) => {
  const { removeItem, updateItemAmount } = useContext(CartContext);

  const addAmount = () => {
    updateItemAmount(index, item.amount + 1);
  };

  const removeAmount = () => {
    item.amount > 1 && updateItemAmount(index, item.amount - 1);
  };

  const price = priceFormatter.format(item.price);
  const total = priceFormatter.format(item.price * item.amount);

  return (
    <div className="cart__products__product">
      <div className="cart__products__item">
        <div className="cart__products__item__img">
          <img
            src="https://cdn.shopify.com/s/files/1/0339/0901/products/shopdressup_mock_neck_bodysuit-12_1800x1800.jpg?v=1636772362"
            alt=""
          />
        </div>
      </div>
      <div className="cart__products__item">
        <div className="cart__products__item__row">
          <h3 className="cart__products__item__row-title">{item.title}</h3>
          <div className="icon-remove" onClick={() => removeItem(index)}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.5 7.5H8.75V15H7.5V7.5Z" fill="#777777" />
              <path d="M11.25 7.5H12.5V15H11.25V7.5Z" fill="#777777" />
              <path
                d="M2.5 3.75V5H3.75V17.5C3.75 17.8315 3.8817 18.1495 4.11612 18.3839C4.35054 18.6183 4.66848 18.75 5 18.75H15C15.3315 18.75 15.6495 18.6183 15.8839 18.3839C16.1183 18.1495 16.25 17.8315 16.25 17.5V5H17.5V3.75H2.5ZM5 17.5V5H15V17.5H5Z"
                fill="#777777"
              />
              <path d="M7.5 1.25H12.5V2.5H7.5V1.25Z" fill="#777777" />
            </svg>
          </div>
        </div>
        <div className="cart__products__item__row">
          <p className="cart__products__item__row-key">color</p>
          <p className="cart__products__item__row-value">{item.colors[0]}</p>
        </div>
        <div className="cart__products__item__row">
          <p className="cart__products__item__row-key">size</p>
          <p className="cart__products__item__row-value">{item.sizes[0]}</p>
        </div>
        <div className="cart__products__item__row">
          <div className="cart__products__item__row-amount">
            <span className="icon-minus" onClick={removeAmount}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.7734 6.94336H2.22656C2.16211 6.94336 2.10938 6.99609 2.10938 7.06055V7.93945C2.10938 8.00391 2.16211 8.05664 2.22656 8.05664H12.7734C12.8379 8.05664 12.8906 8.00391 12.8906 7.93945V7.06055C12.8906 6.99609 12.8379 6.94336 12.7734 6.94336Z"
                  fill="black"
                />
              </svg>
            </span>
            <span className="amount-value">{item.amount}</span>
            <span className="icon-plus" onClick={addAmount}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.06055 2.22656H7.93945C8.01758 2.22656 8.05664 2.26562 8.05664 2.34375V12.6562C8.05664 12.7344 8.01758 12.7734 7.93945 12.7734H7.06055C6.98242 12.7734 6.94336 12.7344 6.94336 12.6562V2.34375C6.94336 2.26562 6.98242 2.22656 7.06055 2.22656Z"
                  fill="black"
                />
                <path
                  d="M2.57812 6.94336H12.4219C12.5 6.94336 12.5391 6.98242 12.5391 7.06055V7.93945C12.5391 8.01758 12.5 8.05664 12.4219 8.05664H2.57812C2.5 8.05664 2.46094 8.01758 2.46094 7.93945V7.06055C2.46094 6.98242 2.5 6.94336 2.57812 6.94336Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="cart__products__item__row">
          <p className="cart__products__item__row-key">price</p>
          <p className="cart__products__item__row-value">{price}</p>
        </div>
        <div className="cart__products__item__row">
          <p className="cart__products__item__row-key">total</p>
          <p className="cart__products__item__row-value">{total}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
