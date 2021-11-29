import React, { useState } from 'react'
import Select from '../../ui/Select';
import './Products.style.css'

import Sidebar from './sidebar/Sidebar'

const Products = () => {

  const [isActiveFilters, setIsActiveFilters] = useState(false);
  
  const list1 = [
    {value: 'in-stock', name: 'In stock'},
    {value: 'out-of-stock', name: 'Out of stock'},
  ]

  const list2 = [
    {value: 'small', name: 'small'},
    {value: 'medium', name: 'medium'},
    {value: 'large', name: 'large'},
  ]

  const options = [
    {value: 'l2hprice', name: 'low to high price'},
    {value: 'date', name: 'date'},
  ]

  const handleFilterClick = (e) => {
    e.preventDefault();
    setIsActiveFilters(!isActiveFilters);
  }
  

  return (
    <section id="products">
      <div className="products container">
        <div className="products__header">
          <div className="products__header__path">
            <a href="" className="products__header__path-link">home</a>
            <span className="products__header__path-link">/</span>
            <a href="" className="products__header__path-link">products</a>
          </div>
          <h2 className="products__header-title">All Products</h2>
        </div>
        <div className="products__content">
          <div className="products__content__main">
            <Sidebar isActiveFilters={isActiveFilters}
              list1={list1}
              list2={list2}
              onHandleFilterClick={handleFilterClick} />
            <div className="products__content__main__header">
              <button className="btn-select" onClick={handleFilterClick}>Filter</button>
              <Select items={options} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products
