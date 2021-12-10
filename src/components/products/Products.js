import React, { useContext, useEffect, useState } from "react";
import "./Products.style.css";
import FilterContext from "../../context/filter-context";

import { Product } from "../../components";

const Products = ({ products }) => {
  const [updatedProducts, setUpdatedProducts] = useState(products);
  const {
    filters: { availability, colors, sizes, range },
  } = useContext(FilterContext);
  // const { availability, colors, sizes } = filterContext.filters;
  // const [filterAvailability, setFilterAvailability] = useState(availability);
  // const [filterSizes, setFilterSizes] = useState(sizes);
  // const [filterColors, setFilterColors] = useState(colors);

  useEffect(() => {
    const checkSizes = (product) => {
      for (let size of product.sizes) {
        if (sizes.includes(size)) {
          return true;
        }
      }
      return false;
    };

    const checkColors = (product) => {
      for (let color of product.colors) {
        if (colors.includes(color)) {
          return true;
        }
      }
      return false;
    };

    const newProducts = products.filter((product) => {
      const availabilityConditions =
        availability.length === 2 ||
        availability.length === 0 ||
        availability.includes(product.Stock);

      const sizesConditions = sizes.length === 0 || checkSizes(product);
      const colorsConditions = colors.length === 0 || checkColors(product);
      return (
        availabilityConditions &&
        sizesConditions &&
        colorsConditions &&
        range >= product.price
      );
    });
    setUpdatedProducts(newProducts);
  }, [
    availability,
    availability.length,
    sizes,
    sizes.length,
    colors,
    colors.length,
    range,
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
