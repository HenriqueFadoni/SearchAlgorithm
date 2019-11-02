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

const findValue = ({ i, dispatch, grid, searchingNum }) => {
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
}

export const linearSearch = () => {
  return (dispatch, getState) => {
    const { grid, searchingNum, repeatItems } = getState();

    if (repeatItems) {
      for (let i = 0; i < grid.length; i++) {
        findValue({ i, dispatch, grid, searchingNum });
      }
    } else {
      for (let i = 0; i < grid.length; i++) {
        findValue({ i, dispatch, grid, searchingNum });
        if (searchingNum === grid[i]) break;
      }
    }
  }
}

// Reseting the Linear Search Algorithm
export const linearSearchReset = () => {
  return {
    type: actionTypes.LINEAR_SEARCH_RESET
  }
}
