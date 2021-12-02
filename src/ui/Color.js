import React from "react";
import './Color.style.css'

const Color = ( { color }) => {
  
  return (
    <>
      <div style={{backgroundColor : color}} className="color"></div>
    </>
  )
}

export default Color
