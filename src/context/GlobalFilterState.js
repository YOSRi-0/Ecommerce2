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
  UPDATE_RANGE,
} from "./reducers";

const GlobalFilterState = ({ children }) => {
  const [filterState, dispatch] = useReducer(filterReducer, {
    filters: {
      availability: null,
      colors: "",
      sizes: "",
      range: 300,
    },
  });

  const addAvailability = (availability) => {
    dispatch({ type: ADD_AVAILABILITY, availability });
  };
  const removeAvailability = () => {
    dispatch({ type: REMOVE_AVAILABILITY});
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

  const updateRange = (range) => {
    dispatch({ type: UPDATE_RANGE, range });
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
        updateRange: updateRange,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default GlobalFilterState;
