import * as actionTypes from '../actions/actionTypes';

const initialState = {
  grid: [],
  gridSize: { width: 10, height: 5 }
}

const generateGrid = state => {
  const columnArray = [];
  
  while (columnArray.length < state.gridSize.height) {
    const rowArray = [];

    while (rowArray.length < state.gridSize.width) {
      rowArray.push(Math.round(Math.random() * 1000));
    }

    columnArray.push(rowArray);
  }
  
  return {
    ...state,
    grid: columnArray
  }
}

const changeGridSize = (state, action) => {
  switch (action.size) {
    case '0': 
      return {
        ...state,
        gridSize: { width: 10, height: 5 }
      };
    case '1': 
      return {
        ...state,
        gridSize: { width: 10, height: 10 }
      };
    case '2': 
      return {
        ...state,
        gridSize: { width: 15, height: 20 }
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