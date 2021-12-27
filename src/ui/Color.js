import React, { useContext, useEffect, useState } from "react";
import "./Color.style.css";
import FilterContext from "../context/filter-context";

const Color = ({ color }) => {
  const filterContext = useContext(FilterContext);

  
  const onAddFilter = () => {
    filterContext.addColor(color);
  };

//  const onRemoveFilter = () => {
//    const length = filterContext.filters.colors.length;
//  };
//
//  useEffect(() => {
//    isActive ? onAddFilter() : onRemoveFilter();
//  }, [isActive]);
//    length && filterContext.removeColor(color);

  const handleChange = (e) => {
    onAddFilter()
  }

  return (
    <>
      <input
        type="radio"
        id={color} 
        onChange={handleChange}
        style={{ backgroundColor: color }}
        className="color"
        name="color"
      />
    </>
  );
};

export default Color;
