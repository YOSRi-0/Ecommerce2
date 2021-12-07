import React, { createContext } from "react";

export default createContext({
  filters: {
    availability: [],
    colors: [],
    sizes: [],
  },
  addAvailability: (availability) => {},
  removeAvailability: (availability) => {},
  addColor: (color) => {},
  removeColor: (color) => {},
  addSize: (size) => {},
  removeSize: (size) => {},
});
