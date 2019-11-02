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

import {
  binarySearchCurrentValue,
  binarySearchValueFound
} from './binarySearchReducer';

const initialState = {
  grid: [],
  unsortedGrid:[],
  gridSize: null,
  repeatItems: false,
  selfOrganize: false,
  searchingNum: null,
  sortGrid: false,
  currentIndex: null,
  currentIndexes: [],
  valueFound: [],
  isSearching: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Grid Actions
    case actionTypes.GENERATE_GRID: return generateGrid(state);
    case actionTypes.CHANGE_GRID_SIZE: return changeGridSize(state, action);
    case actionTypes.REPEAT_NUMBER_IN_GRID: return repeatNumberInGrid(state, action);
    case actionTypes.SELF_ORGANIZE_DATA: return selfOrganizeData(state, action);
    case actionTypes.SORT_GRID: return organizeGrid(state, action);
    case actionTypes.SEARCH_ELEMENT: return searchElement(state, action);
    // Linear Search
    case actionTypes.LINEAR_SEARCH_CURRENT_VALUE: return linearSearchCurrentIndex(state, action);
    case actionTypes.LINEAR_SEARCH_VALUE_FOUND: return linearSearchValueFound(state, action);
    case actionTypes.LINEAR_SEARCH_RESET: return linearSearchReset(state);
    // Binary Search
    case actionTypes.BINARY_SEARCH_CURRENT_VALUE: return binarySearchCurrentValue(state, action);
    case actionTypes.BINARY_SEARCH_VALUE_FOUND: return binarySearchValueFound(state, action);
    default: return state;
  }
}

export default reducer;