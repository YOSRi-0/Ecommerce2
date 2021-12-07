import React, { useState } from "react";
import "./Checkbox.style.css";

const Checkbox = ({ item }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };
  console.log(isChecked);

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
