import React, { useState } from "react";
import "./CheckboxList.style.css";

import Checkbox from "./Checkbox";

const CheckboxList = ({ list }) => {
  return (
    <ul className="list">
      {list.map((item, id) => (
        <Checkbox key={id} item={item} />
      ))}
    </ul>
  );
};

export default CheckboxList;
