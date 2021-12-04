import React, { useState } from "react";
import TopProduct from "./TopProduct";
import "./TopProducts.style.css";

const products = [
  {
    id: 0,
    image: "url",
    title: "Lorem ipsum dolor sit amet, consectetur",
    price: 30,
  },
  {
    id: 1,
    image: "url",
    title: "Lorem ipsum dolor sit amet, consectetur",
    price: 30,
  },
  {
    id: 2,
    image: "url",
    title: "Lorem ipsum dolor sit amet, consectetur",
    price: 30,
  },
];

const TopProducts = (props) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <section id="top_products">
        <div className="top_products container">
          <h2 className="top_products-heading">Best Selling Products</h2>
          <div className={`top_products__tabs ${toggle ? "toggle" : ""}`}>
            <button
              className={`top_products__tabs-item ${!toggle ? "active" : ""}`}
              onClick={() => setToggle(false)}
            >
              for men
            </button>
            <button
              className={`top_products__tabs-item ${toggle ? "active" : ""}`}
              onClick={() => setToggle(true)}
            >
              for women
            </button>
          </div>
          <div className="top_products__list">
            {products.map((product) => (
              <TopProduct key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TopProducts;
