import React, { useContext, useState, useEffect, useCallback } from "react";
import FilterContext from "../context/filter-context";
import "./Range.style.css";

const Range = () => {
  const maxValue = 300;
  const [rangeValue, setRangeValue] = useState(maxValue);
  const { updateRange } = useContext(FilterContext);

  const handleChange = (e) => {
    setRangeValue(e.target.value);
  };

  const onUpdateRange = useCallback(() => {
    updateRange(rangeValue);
  }, [rangeValue, updateRange]);

  useEffect(() => {
    let timer = setTimeout(() => {
      onUpdateRange();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [onUpdateRange]);

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
