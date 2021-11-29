import React, {useState} from "react";
import './Range.style.css'

const Range = () => {
  const [rangeValue, setRangeValue] = useState(0);
  const maxValue = 300;

  const handleChange = (e) => {
    setRangeValue(e.target.value)
  }

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
        onChange={handleChange}
      />
    </div>
  )

}

export default Range
