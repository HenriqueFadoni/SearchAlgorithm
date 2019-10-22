import * as actionTypes from './actionTypes';

// Grid
export const generateGrid = () => {
  return {
    type: actionTypes.GENERATE_GRID
  }
}

// Edit Grid Size
export const changeGridSize = size => {
  return {
    type: actionTypes.CHANGE_GRID_SIZE,
    size
  }
}

// Repeat Number Option
export const repeatNumberInGrid = repeatItems => {
  return {
    type: actionTypes.REPEAT_NUMBER_IN_GRID,
    payload: {
      repeatItems
    }
  }
}

// Self-Organizing Data Option
export const selfOrganizeData = selfOrganize => {
  return {
    type: actionTypes.SELF_ORGANIZE_DATA,
    payload: {
      selfOrganize
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
