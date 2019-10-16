import * as actionTypes from './actionTypes';

export const changeGridSize = size => {
  return  {
    type: actionTypes.CHANGE_GRID_SIZE,
    size
  }
}