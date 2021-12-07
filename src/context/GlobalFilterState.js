import React, { useReducer } from "react";

import FilterContext from "./filter-context";
import {
  filterReducer,
  ADD_AVAILABILITY,
  REMOVE_AVAILABILITY,
  ADD_SIZE,
  REMOVE_SIZE,
  ADD_COLOR,
  REMOVE_COLOR,
} from "./reducers";

const GlobalFilterState = (props) => {
  const [filterState, dispatch] = useReducer(filterReducer, {
    filters: {
      availability: [],
      colors: [],
      sizes: [],
    },
  });

  const addAvailability = (availability) => {
    dispatch({ type: ADD_AVAILABILITY, availability });
  };
  const removeAvailability = (availability) => {
    dispatch({ type: REMOVE_AVAILABILITY, availability });
  };

  const addSize = (size) => {
    dispatch({ type: ADD_SIZE, size });
  };
  const removeSize = (size) => {
    dispatch({ type: REMOVE_SIZE, size });
  };

  const addColor = (color) => {
    dispatch({ type: ADD_COLOR, color });
  };
  const removeColor = (color) => {
    dispatch({ type: REMOVE_COLOR, color });
  };

  return (
    <FilterContext.Provider
      value={{
        filters: filterState.filters,
        addAvailability: addAvailability,
        removeAvailability: removeAvailability,
        addColor: addColor,
        removeColor: removeColor,
        addSize: addSize,
        removeSize: removeSize,
      }}
    >
      {props.children}
    </FilterContext.Provider>
  );
};

export default GlobalFilterState;
