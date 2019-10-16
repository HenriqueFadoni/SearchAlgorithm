import * as actionTypes from './actionTypes';

export const generateGrid = () => {
  return {
    type: actionTypes.GENERATE_GRID
  }
}

export const changeGridSize = size => {
  return  {
    type: actionTypes.CHANGE_GRID_SIZE,
    size
  }
}