import * as actionTypes from '../actions/actionTypes';

const initialState = {
  grid: [],
  gridSize: 50
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

const changeGridSize = (state, action) => {
  switch (action.size) {
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GENERATE_GRID: return generateGrid(state);
    case actionTypes.CHANGE_GRID_SIZE: return changeGridSize(state, action);
    default: return state;
  }
}

export default reducer;