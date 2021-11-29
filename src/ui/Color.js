import React from "react";
import './Color.style.css'

const Color = ( { color }) => {
  return (
    <a href="#" className="color-container">
      <span className="color-circle" style={{backgroundColor: color || 'transparent'}}></span>
    </a>
  )
}

export default Color
