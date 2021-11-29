import React, {useState} from "react";
import './ButtonCollapsing.style.css'

const ButtonCollapsing = ({ title, children, height }) => {
  const [isCollapsed, setIsCollapsed] = useState(false)


  const handleClick = e => {
    e.preventDefault();
    setIsCollapsed(!isCollapsed);
  }

  return (
    <>
      <button className="btn-collapse" onClick={handleClick}>{title}</button>
      <div style={{height: isCollapsed ? height : 0 + 'px'}} className={`list-collapse ${isCollapsed ? 'active' : ''}`}>
        {children}
      </div>
    </>

  )
}

export default ButtonCollapsing
