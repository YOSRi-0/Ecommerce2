import React from "react";
import './Sidebar.style.css'

import ButtonCollapsing from '../../../ui/ButtonCollapsing'
import CheckboxList from '../../../ui/CheckboxList'
import Range from "../../../ui/Range";
import Color from "../../../ui/Color";

const Sidebar = ( {isActiveFilters, list1, list2, onHandleFilterClick} ) => {

  return (
    <>
      {isActiveFilters && 
          <div className="backdrop" onClick={onHandleFilterClick}></div>
      }
      <div className={`products__content__sidebar ${isActiveFilters ? 'active' : ''}`}>
        <div className="filters">
          <div className="filters__header">
            <span className="filters__header-span">filter</span>
            <span className="filters__header-close" onClick={onHandleFilterClick}>X</span>
          </div>
          <form className="filters__form">
            <div className="filters__form-control">
              <ButtonCollapsing title="availability" height={list1.length * 30 - 12}>
                <CheckboxList list={list1}/>
              </ButtonCollapsing>
          </div>
          <div className="filters__form-control">
              <ButtonCollapsing title="price">
                <Range />
              </ButtonCollapsing>
         </div> 
          <div className="filters__form-control">
              <ButtonCollapsing title="color" >
                <Color color="red" />
            </ButtonCollapsing>
          </div> 
            <div className="filters__form-control">
              <ButtonCollapsing title="size">
              <CheckboxList list={list2}/>
            </ButtonCollapsing>
          </div> 
        </form>
        </div>
      </div>
    </>
  )
}

export default Sidebar
