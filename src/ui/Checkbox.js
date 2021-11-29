import React, {useState} from 'react';
import './Checkbox.style.css';

const Checkbox = ({ key, item }) => {
  const [checked, setChecked] = useState(false);
   
  const handleClick = (e) => {
    setChecked(() => e.target.checked);
  }

  return(
    <li  className="list-item" key={key}>
      <label htmlFor={key} className="list-item-wrapper">
        <input
          className="list-item-input"
          type="checkbox"
          value={item.value}
          key={key}
          onChange={handleClick}
        />
        <span className="list-item-checkbox"></span>
        <span className="list-item-text">{item.name}</span>
      </label>
    </li>
  )
}

export default Checkbox