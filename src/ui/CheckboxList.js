import React, { useState } from "react";
import "./CheckboxList.style.css";

import Checkbox from "./Checkbox";

const CheckboxList = ({ type, list }) => {
  return (
    <ul className="list">
      {list.map((item, id) => (
        <Checkbox key={id} type={type} item={item} />
      ))}
    </ul>
  );
};

export default CheckboxList;
