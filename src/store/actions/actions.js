import * as actionTypes from './actionTypes';

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

export const searchElement = value => {
  return {
    type: actionTypes.SEARCH_ELEMENT,
    value
  }
}

const linearSearchCurrentValue = ({ currentIndex }) => {
  return {
    type: actionTypes.LINEAR_SEARCH_CURRENT_VALUE,
    payload: {
      currentIndex
    }
  }
}

const linearSearchValueFound = ({ indexFound }) => {
  return {
    type: actionTypes.LINEAR_SEARCH_VALUE_FOUND,
    payload: {
      indexFound
    }
  }
}

export const linearSearch = () => {
  return async (dispatch, getState) => {
    const { grid, searchingNum } = getState();

    for (let i = 0; i < grid.length; i++) {
      (function (i) {
        setTimeout(() => {
          dispatch(linearSearchCurrentValue({
            currentIndex: i
          }));

          if (searchingNum === grid[i]) {
            dispatch(linearSearchValueFound({
              indexFound: i
            }));
          }
        }, 100 * i)
      })(i);
    }
  }
}