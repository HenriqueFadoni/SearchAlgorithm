// Current Values
export const binarySearchCurrentValue = (state, { payload }) => {
  const pastIndexes = payload.currentIndexes.map(index => {
    if (!state.currentIndexes.includes(index)) {
      return index
    }
  }).filter(i => i !== undefined);

  return {
    ...state,
    currentIndexes: [
      ...state.currentIndexes,
      ...pastIndexes
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

// Reset Binary Search
export const binarySearchReset = state => {
  return {
    ...state,
    searchingNum: null,
    currentIndexes: [],
    valueFound: [],
    isSearching: false
  }
}
