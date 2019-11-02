// Current Values
export const binarySearchCurrentValue = (state, { payload }) => {
  return {
    ...state,
    currentIndexes: [
      ...state.currentIndexes,
      ...payload.currentIndexes
    ]
  }
}

// Index of the Value that was Found
export const binarySearchValueFound = (state, { payload }) => {
  return {
    ...state,
    valueFound: [
      ...state.valueFound,
      payload.indexFound
    ]
  }
}