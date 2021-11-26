import React from "react";
import './Categories.style.css'

const Categories = (props) => {
  return (
    <section id="categories">
      <div className="categories container">
        <div className="categories-heading">
          Categories
        </div>
        <div className="categories__content">
          <div className="categories__category">
            <button className="btn btn-light">shop men</button>
          </div>
          <div className="categories__category">
            <button className="btn btn-light">shop women</button>
          </div>
        </div>
      </div>
    </section> 
  )
}

export default Categories
