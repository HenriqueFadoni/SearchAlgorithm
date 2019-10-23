import * as actionTypes from '../actions/actionTypes';

import {
  generateGrid,
  changeGridSize,
  repeatNumberInGrid,
  selfOrganizeData,
  organizeGrid,
  searchElement
} from './gridReducer';

import {
  linearSearchCurrentIndex,
  linearSearchValueFound,
  linearSearchReset
} from './linearSearchReducer';

const initialState = {
  grid: [],
  gridSize: null,
  repeatItems: false,
  selfOrganize: false,
  searchingNum: null,
  sortGrid: false,
  currentIndex: null,
  valueFound: [], // Index of Values Found
  isSearching: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GENERATE_GRID: return generateGrid(state);
    case actionTypes.CHANGE_GRID_SIZE: return changeGridSize(state, action);
    case actionTypes.REPEAT_NUMBER_IN_GRID: return repeatNumberInGrid(state, action);
    case actionTypes.SELF_ORGANIZE_DATA: return selfOrganizeData(state, action);
    case actionTypes.SORT_GRID: return organizeGrid(state, action);
    case actionTypes.SEARCH_ELEMENT: return searchElement(state, action);
    case actionTypes.LINEAR_SEARCH_CURRENT_VALUE: return linearSearchCurrentIndex(state, action);
    case actionTypes.LINEAR_SEARCH_VALUE_FOUND: return linearSearchValueFound(state, action);
    case actionTypes.LINEAR_SEARCH_RESET: return linearSearchReset(state);
    default: return state;
  }
}

export default reducer;