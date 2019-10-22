// Current Index That We are Searching
export const linearSearchCurrentIndex = (state, { payload }) => {
  return {
    ...state,
    currentIndex: payload.currentIndex
  }
}

// Index of the Value that was Found
export const linearSearchValueFound = (state, { payload }) => {
  return {
    ...state,
    valueFound: [
      ...state.valueFound,
      payload.indexFound
    ]
  }
}

// Reseting the Search and Self-Organizing Grid
const selfOrganizeGrid = (grid, arrIndex) => {
  const newGrid = grid;

  arrIndex.forEach(index => {
    if (index > 0) {
      const indexToSwap = index - 1;

      const currentValue = newGrid[index];
      newGrid[index] = newGrid[indexToSwap];
      newGrid[indexToSwap] = currentValue;
    }
  });

  return newGrid;
}

export const linearSearchReset = state => {
  const { selfOrganize } = state;
  
  if (selfOrganize) {
    const { grid, valueFound } = state;

    const newGrid = selfOrganizeGrid(grid, valueFound);

    return {
      ...state,
      grid: newGrid,
      searchingNum: null,
      currentIndex: null,
      valueFound: [],
      isSearching: false
    }
  } else {
    return {
      ...state,
      searchingNum: null,
      currentIndex: null,
      valueFound: [],
      isSearching: false
    }
  }

}
