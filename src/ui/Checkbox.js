import React, { useContext, useEffect, useState } from "react";
import "./Checkbox.style.css";
import FilterContext from "../context/filter-context";

const Checkbox = ({ type, item }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  const filterContext = useContext(FilterContext);

  const onAddFilter = () => {
    type === "AVAILABILITY" && filterContext.addAvailability(item.value);
    type === "SIZE" && filterContext.addSize(item.value);
  };
  const onRemoveFilter = () => {
    if (type === "AVAILABILITY") {
      const length = filterContext.filters.availability.length;
      length && filterContext.removeAvailability(item.value);
    }

    if (type === "SIZE") {
      const length = filterContext.filters.sizes.length;
      length && filterContext.removeSize(item.value);
    }
  };

  useEffect(() => {
    if (isChecked) {
      onAddFilter();
    } else {
      onRemoveFilter();
    }
  }, [isChecked]);

  return (
    <li className="list-item">
      <label htmlFor={item.value} className="list-item-wrapper">
        <input
          id={item.value}
          className="list-item-input"
          type="checkbox"
          checked={isChecked}
          onChange={handleClick}
        />
        <span className="list-item-checkbox"></span>
        <span className="list-item-text">{item.name}</span>
      </label>
    </li>
  );
};

export default Checkbox;
