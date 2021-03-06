import React from "react";
import "./Select.style.css";

const Select = ({ items }) => {
  return (
    <select className="sort-select">
      {items.map((item, id) => (
        <option key={id} value={item.value}>
          {" "}
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
