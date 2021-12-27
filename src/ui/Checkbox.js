// import React, { useContext, useEffect, useState } from "react";
// import "./Checkbox.style.css";
// import FilterContext from "../context/filter-context";
// 
// const Checkbox = ({ type, item }) => {
//   const [isChecked, setIsChecked] = useState(false);
//   let availability = null
//   const handleClick = (e) => {
//     console.log(item.value, isChecked)
//     setIsChecked(!isChecked);
//     console.log(e.target.checked)
//   };
// 
//   const filterContext = useContext(FilterContext);
// 
//   const onAddFilter = () => {
//     console.log(item.value, isChecked)
//     type === "AVAILABILITY" && filterContext.addAvailability(item.value === "in-stock" ? 1 : 0);
//     type === "SIZE" && filterContext.addSize(item.value);
//   };
//   const onRemoveFilter = () => {
//     if (type === "AVAILABILITY") {
//       setIsChecked(false)
//     }
// 
//     if (type === "SIZE") {
//       const size = filterContext.filters.size;
//       size && filterContext.removeSize(item.value);
//     }
//   };
// 
//   useEffect(() => {
//     if (isChecked) {
//       onAddFilter();
//     }  
// 
//     if (isChecked) {
//       if (type === "SIZE") {
//         const size = filterContext.filters.size;
//         if (size !== item.value && size.length) {
//           setIsChecked(false)
//         }
//       }
//     }
//   }, [isChecked]);
// 
//   return (
//     <li className="list-item">
//       <label htmlFor={item.value} className="list-item-wrapper">
//         <input
//           id={item.value}
//           className="list-item-input"
//           type="radio"
//           checked={isChecked}
//           onChange={handleClick}
//           name={type}
//         />
//         <span className="list-item-checkbox"></span>
//         <span className="list-item-text">{item.name}</span>
//       </label>
//     </li>
//   );
// };
// 
// export default Checkbox;

import React, {useContext} from "react"
import "./Checkbox.style.css"
import FilterContext from "../context/filter-context"

const Checkbox = ({type, item}) => {
  const filterContext = useContext(FilterContext)

  const handleClick = (e) => {
    console.log(item.value, e.target.checked)
    onAddFilter()
  }

  const onAddFilter = () => {
    type === "AVAILABILITY" && filterContext.addAvailability(item.value !== "in-stock" ? 0 : 1)
    type === "SIZE" && filterContext.addSize(item.value)
  }

   return (
     <li className="list-item">
       <label htmlFor={item.value} className="list-item-wrapper">
         <input
           id={item.value}
           className="list-item-input"
           type="radio" onChange={handleClick}
           name={type}
         />
         <span className="list-item-checkbox"></span>
         <span className="list-item-text">{item.name}</span>
       </label>
     </li>
   );
}

export default Checkbox
