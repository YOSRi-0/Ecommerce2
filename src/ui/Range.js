import React, { useState } from "react";
import "./Range.style.css";

const Range = () => {
  const maxValue = 300;
  const [rangeValue, setRangeValue] = useState(maxValue);

  const handleChange = (e) => {
    setRangeValue(e.target.value);
  };

  return (
    <div className="range">
      <div className="range__limits">
        <span>$ 0</span>
        <span>$ {rangeValue}</span>
      </div>
      <input
        className="range-input"
        type="range"
        name="price"
        id="price"
        step="5"
        min="0"
        max="300"
        value={rangeValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default Range;
