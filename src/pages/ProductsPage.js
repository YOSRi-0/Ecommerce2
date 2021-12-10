import React, { useState } from "react";
import "./ProductsPage.style.css";

import { filters } from "../data";
import { Sidebar, Products } from "../components";
import { Select } from "../ui";
import GlobalFilterState from "../context/GlobalFilterState";
import { Link } from "react-router-dom";

const ProductsPage = () => {
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
    <GlobalFilterState>
      <section id="products">
        <div className="products container">
          <div className="products__header">
            <div className="products__header__path">
              <Link to="/" className="products__header__path-link">
                home
              </Link>
              <span className="products__header__path-link">/</span>
              <Link to="/products" className="products__header__path-link">
                products
              </Link>
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
              <Products />
            </div>
          </div>
        </div>
      </section>
    </GlobalFilterState>
  );
};

export default ProductsPage;
