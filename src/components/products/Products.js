import React, { useContext, useEffect, useState } from "react";
import "./Products.style.css";
import FilterContext from "../../context/filter-context";

import { products } from "../../data";
import { Product } from "../../components";

const Products = () => {
  const [updatedProducts, setUpdatedProducts] = useState(products);
  const filterContext = useContext(FilterContext);
  const { availability, colors, sizes } = filterContext.filters;
  const [filterAvailability, setFilterAvailability] = useState(availability);
  const [filterSizes, setFilterSizes] = useState(sizes);
  const [filterColors, setFilterColors] = useState(colors);

  useEffect(() => {
    const checkSizes = (product) => {
      for (let size of product.sizes) {
        if (filterSizes.includes(size)) {
          return true;
        }
      }
      return false;
    };

    const checkColors = (product) => {
      for (let color of product.colors) {
        if (filterColors.includes(color)) {
          return true;
        }
      }
      return false;
    };

    const newProducts = products.filter((product) => {
      const availabilityConditions =
        filterAvailability.length === 2 ||
        filterAvailability.length === 0 ||
        filterAvailability.includes(product.Stock);

      const sizesConditions = filterSizes.length === 0 || checkSizes(product);
      const colorsConditions =
        filterColors.length === 0 || checkColors(product);
      return availabilityConditions && sizesConditions && colorsConditions;
    });
    setUpdatedProducts(newProducts);
  }, [
    filterAvailability.length,
    filterAvailability,
    filterSizes.length,
    filterSizes,
    filterColors.length,
    filterColors,
  ]);

  return (
    <div className="grid">
      {updatedProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
