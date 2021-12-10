import GetIndex from "../utils/GetIndex";

export const ADD_AVAILABILITY = "ADD_AVAILABILITY";
export const REMOVE_AVAILABILITY = "REMOVE_AVAILABILITY";
export const ADD_COLOR = "ADD_COLOR";
export const REMOVE_COLOR = "REMOVE_COLOR";
export const ADD_SIZE = "ADD_SIZE";
export const REMOVE_SIZE = "REMOVE_SIZE";
export const UPDATE_RANGE = "UPDATE_RANGE";

const addAvailability = (availability, state) => {
  const updatedFilters = state.filters;
  const updatedFiltersIndex = GetIndex(
    availability,
    updatedFilters.availability
  );

  if (updatedFiltersIndex < 0) {
    updatedFilters.availability.push(availability);
  } else {
    console.log("item exists");
  }

  // console.log("state: ", { ...state.filters });

  return { ...state, filters: updatedFilters };
};

const removeAvailability = (availability, state) => {
  const updatedFilters = state.filters;
  const updatedFiltersIndex = GetIndex(
    availability,
    updatedFilters.availability
  );

  if (updatedFiltersIndex < 0) {
    console.log("item does not exist");
    return;
  }

  updatedFilters.availability.splice(updatedFiltersIndex, 1);

  return { ...state, filters: updatedFilters };
};

const addColor = (color, state) => {
  const updatedFilters = state.filters;
  const updatedFiltersIndex = GetIndex(color, updatedFilters.colors);

  if (updatedFiltersIndex < 0) {
    updatedFilters.colors.push(color);
  } else {
    console.log("item exists");
  }

  // console.log("state: ", { ...state.filters });

  return { ...state, filters: updatedFilters };
};

const removeColor = (color, state) => {
  const updatedFilters = state.filters;
  const updatedFiltersIndex = GetIndex(color, updatedFilters.colors);

  if (updatedFiltersIndex < 0) {
    console.log("item does not exist");
    return;
  }

  updatedFilters.colors.splice(updatedFiltersIndex, 1);

  return { ...state, filters: updatedFilters };
};

const addSize = (size, state) => {
  const updatedFilters = state.filters;
  const updatedFiltersIndex = GetIndex(size, updatedFilters.sizes);

  if (updatedFiltersIndex < 0) {
    updatedFilters.sizes.push(size);
  } else {
    console.log("item exists");
  }

  // console.log("state: ", { ...state.filters });

  return { ...state, filters: updatedFilters };
};
const removeSize = (size, state) => {
  const updatedFilters = state.filters;
  const updatedFiltersIndex = GetIndex(size, updatedFilters.sizes);

  if (updatedFiltersIndex < 0) {
    console.log("item exists");
    return;
  }

  updatedFilters.sizes.splice(updatedFiltersIndex, 1);

  // console.log("state: ", { ...state.filters });

  return { ...state, filters: updatedFilters };
};

const updateRange = (range, state) => {
  const updatedFilters = state.filters;

  // console.log(updatedFilters);
  updatedFilters.range = range;

  return { ...state, filters: updatedFilters };
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case ADD_AVAILABILITY:
      return addAvailability(action.availability, state);
    case REMOVE_AVAILABILITY:
      return removeAvailability(action.availability, state);
    case ADD_COLOR:
      return addColor(action.color, state);
    case REMOVE_COLOR:
      return removeColor(action.color, state);
    case ADD_SIZE:
      return addSize(action.size, state);
    case REMOVE_SIZE:
      return removeSize(action.size, state);
    case UPDATE_RANGE:
      return updateRange(action.range, state);
    default:
      return state;
  }
};
