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

export const repeatNumberInGrid = repeatItems => {
  return {
    type: actionTypes.REPEAT_NUMBER_IN_GRID,
    payload: {
      repeatItems
    }
  }
}

// Search Input
export const searchElement = value => {
  return {
    type: actionTypes.SEARCH_ELEMENT,
    value
  }
}
