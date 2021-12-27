import React, { useState, useEffect, useContext } from "react";
import "./Products.style.css";
import FilterContext from "../../context/filter-context";
import { Select } from "../../ui";

import { Product } from "../../components";

const Products = ({fetchProducts}) => {
  const options = [
    { value: "l2hprice", name: "Low To High Price" },
    { value: "date", name: "Date" },
  ];

  const [products, setProducts] = useState([]);
  const {
    filters: { availability, color, size, range },
  } = useContext(FilterContext);

  useEffect(() => {
    let params = {}
    color && (params["color"] = color)
    size && (params["size"] = size)
    availability !== null && (params["availability"] = availability)
    range && (params["range"] = range)
    console.log("params", params)
    fetchProducts(params)
    .then(res => {
        console.log(res.data)
        // SET IT TO WORK WITH ASYNCHRONIOUS CODE
        setProducts(res.data)
      })
    .catch(err => console.error(err))
  }, [
    availability,
    size,
    color,
    range,
    fetchProducts
  ]);

  return (
    <div className="products__content__main">
      <div className="products__content__main__header">
        <span className="products__content__main__header-counter">
          {products.length} products
        </span>
      </div>
      <div className="grid">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
