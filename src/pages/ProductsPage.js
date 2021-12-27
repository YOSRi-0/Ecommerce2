import React, { useState } from "react";
import "./ProductsPage.style.css";

import { filters } from "../data";
import { Sidebar, Products } from "../components";
import GlobalFilterState from "../context/GlobalFilterState";
import { Link } from "react-router-dom";

const ProductsPage = ({ fetchProducts }) => {
  const [isActiveFilters, setIsActiveFilters] = useState(false);
  const availabilityFilter = filters.availability;
  const sizesFilter = filters.sizes;
  const colorsFilter = filters.colors;

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
              availability={availabilityFilter}
              sizes={sizesFilter}
              colors={colorsFilter}
              onHandleFilterClick={handleFilterClick}
            />
          <Products fetchProducts={fetchProducts} />
          </div>
        </div>
      </section>
    </GlobalFilterState>
  );
};

export default ProductsPage;
