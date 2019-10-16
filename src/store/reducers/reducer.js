import * as actionTypes from '../actions/actionTypes';

const initialState = {
  gridSize: { l: 5, h: 10 },
}

const changeGridSize = (state, action) => {
  switch (action.size) {
    case '0': 
      return {
        ...state,
        gridSize: { l: 5, h: 10 }
      };
    case '1': 
      return {
        ...state,
        gridSize: { l: 10, h: 10 }
      };
    case '2': 
      return {
        ...state,
        gridSize: { l: 10, h: 30 }
      };
    default: return state;
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_GRID_SIZE: return changeGridSize(state, action);
    default: return state;
  }
}

export default reducer;