import React from "react";
import "./Sidebar.style.css";

import { ButtonCollapsing, CheckboxList, Range, Color } from "../../../ui";

const Sidebar = ({
  isActiveFilters,
  availability,
  sizes,
  colors,
  onHandleFilterClick,
}) => {
  return (
    <>
      {isActiveFilters && (
        <div className="backdrop" onClick={onHandleFilterClick}></div>
      )}
      <div
        className={`products__content__sidebar ${
          isActiveFilters ? "active" : ""
        }`}
      >
        <div className="filters">
          <div className="filters__header">
            <span className="filters__header-span">filter</span>
            <span
              className="filters__header-close"
              onClick={onHandleFilterClick}
            >
              X
            </span>
          </div>
          <form className="filters__form">
            <div className="filters__form-control">
              <ButtonCollapsing
                title="availability"
                height={availability.length * 30 - 12}
              >
                <CheckboxList list={availability} />
              </ButtonCollapsing>
            </div>
            <div className="filters__form-control">
              <ButtonCollapsing title="price" height={sizes.length * 30 - 12}>
                <Range />
              </ButtonCollapsing>
            </div>
            <div className="filters__form-control">
              <ButtonCollapsing title="color" height={30}>
                {colors.map((color) => (
                  <Color color={color} />
                ))}
              </ButtonCollapsing>
            </div>
            <div className="filters__form-control">
              <ButtonCollapsing title="size" height={sizes.length * 30 - 12}>
                <CheckboxList list={sizes} />
              </ButtonCollapsing>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
