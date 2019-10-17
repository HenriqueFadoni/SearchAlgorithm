import * as actionTypes from '../actions/actionTypes';

const initialState = {
  grid: [],
  gridSize: 50,
  searchingNum: null,
  currentIndex: null,
  valueFound: [],
  isSearching: false,
}

const generateGrid = state => {
  const gridArray = [];

  while (gridArray.length < state.gridSize) {
    gridArray.push(Math.round(Math.random() * 1000));
  }

  return {
    ...state,
    grid: gridArray
  }
}

const changeGridSize = (state, { size }) => {
  switch (size) {
    case '0':
      return {
        ...state,
        gridSize: 10
      };
    case '1':
      return {
        ...state,
        gridSize: 50
      };
    case '2':
      return {
        ...state,
        gridSize: 150
      };
    default: return state;
  }
}

const searchElement = (state, { value }) => {
  return {
    ...state,
    searchingNum: Number(value),
    isSearching: true
  }
}

const linearSearchCurrentIndex = (state, { payload }) => {
  return {
    ...state,
    currentIndex: payload.currentIndex
  }
}

const linearSearchValueFound = (state, { payload }) => {
  return {
    ...state,
    valueFound: [
      ...state.valueFound,
      payload.indexFound
    ]
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GENERATE_GRID: return generateGrid(state);
    case actionTypes.CHANGE_GRID_SIZE: return changeGridSize(state, action);
    case actionTypes.SEARCH_ELEMENT: return searchElement(state, action);
    case actionTypes.LINEAR_SEARCH_CURRENT_VALUE: return linearSearchCurrentIndex(state, action);
    case actionTypes.LINEAR_SEARCH_VALUE_FOUND: return linearSearchValueFound(state, action);
    default: return state;
  }
}

export default reducer;