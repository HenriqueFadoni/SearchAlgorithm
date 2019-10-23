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

// Sort Grid
const sortGridDispatch = (grid, sortGrid) => {
  if (grid.length > 0 && sortGrid) {
    const newGrid = grid.sort((a, b) => a - b);

    return {
      type: actionTypes.SORT_GRID,
      payload: {
        newGrid,
        sortGrid
      }
    }
  } else {
    return {
      type: actionTypes.SORT_GRID,
      payload: {
        sortGrid
      }
    }
  }
}

export const sortGrid = sortGrid => {
  return async (dispatch, getState) => {
    const { grid } = getState();
    dispatch(sortGridDispatch(grid, sortGrid))
  }
}


// Search Input
export const searchElement = value => {
  return {
    type: actionTypes.SEARCH_ELEMENT,
    value
  }
}
