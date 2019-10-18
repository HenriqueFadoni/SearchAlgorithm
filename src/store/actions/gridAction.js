import * as actionTypes from './actionTypes';

// Grid
export const generateGrid = () => {
  return {
    type: actionTypes.GENERATE_GRID
  }
}

export const changeGridSize = size => {
  return {
    type: actionTypes.CHANGE_GRID_SIZE,
    size
  }
}

// Search Input
export const searchElement = value => {
  return {
    type: actionTypes.SEARCH_ELEMENT,
    value
  }
}
