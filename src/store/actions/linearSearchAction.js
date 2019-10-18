import * as actionTypes from './actionTypes';

// Searching for Items with Linear Search Algorithm
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

// Reseting the Linear Search Algorithm
export const linearSearchReset = () => {
  return {
    type: actionTypes.LINEAR_SEARCH_RESET
  }
}
