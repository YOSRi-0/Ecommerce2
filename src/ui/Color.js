import React, { useContext, useEffect, useState } from "react";
import "./Color.style.css";
import FilterContext from "../context/filter-context";

const Color = ({ color }) => {
  const [isActive, setIsActive] = useState(false);
  const filterContext = useContext(FilterContext);

  const onAddFilter = () => {
    filterContext.addColor(color);
  };

  const onRemoveFilter = () => {
    const length = filterContext.filters.colors.length;
    length && filterContext.removeColor(color);
  };

  useEffect(() => {
    isActive ? onAddFilter() : onRemoveFilter();
  }, [isActive]);

  return (
    <>
      <div
        onClick={() => setIsActive(!isActive)}
        style={{ backgroundColor: color }}
        className={`color ${isActive ? "active" : ""}`}
      ></div>
    </>
  );
};

export default Color;
