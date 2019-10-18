export const linearSearchCurrentIndex = (state, { payload }) => {
  return {
    ...state,
    currentIndex: payload.currentIndex
  }
}

export const linearSearchValueFound = (state, { payload }) => {
  return {
    ...state,
    valueFound: [
      ...state.valueFound,
      payload.indexFound
    ]
  }
}

export const linearSearchReset = state => {
  return {
    ...state,
    searchingNum: null,
    currentIndex: null,
    valueFound: [],
    isSearching: false
  }
}
