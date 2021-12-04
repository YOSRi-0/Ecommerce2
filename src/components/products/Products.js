import React, { useState } from "react";
import { Select } from "../../ui";
import "./Products.style.css";

import { filters, products } from "../../data";

import Sidebar from "./sidebar/Sidebar";

const Products = () => {
  const [isActiveFilters, setIsActiveFilters] = useState(false);
  const availability = filters.availability;
  const sizes = filters.sizes;
  const colors = filters.colors;

  const options = [
    { value: "l2hprice", name: "Low To High Price" },
    { value: "date", name: "Date" },
  ];

  const handleFilterClick = (e) => {
    e.preventDefault();
    setIsActiveFilters(!isActiveFilters);
  };

  return (
    <section id="products">
      <div className="products container">
        <div className="products__header">
          <div className="products__header__path">
            <a href="" className="products__header__path-link">
              home
            </a>
            <span className="products__header__path-link">/</span>
            <a href="" className="products__header__path-link">
              products
            </a>
          </div>
          <h2 className="products__header-title">All Products</h2>
        </div>
        <div className="products__content">
          <Sidebar
            isActiveFilters={isActiveFilters}
            availability={availability}
            sizes={sizes}
            colors={colors}
            onHandleFilterClick={handleFilterClick}
          />
          <div className="products__content__main">
            <div className="products__content__main__header">
              <button className="btn-select" onClick={handleFilterClick}>
                Filter
              </button>
              <Select items={options} />
              <span className="products__content__main__header-counter">
                33 products
              </span>
            </div>
            <div className="grid">
              {products.map((product) => (
                <div key={product.id} className="grid__item">
                  <div className="grid__item-img">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0339/0901/products/shopdressup_nashville_baseball_cap_1800x1800.jpg?v=1635033011"
                      alt=""
                    />
                  </div>
                  <div className="grid__item__info">
                    <h6 className="grid__item__info-title">
                      Skinny jeans limited edition
                    </h6>
                    <p className="grid__item__info-price">$19.99</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
