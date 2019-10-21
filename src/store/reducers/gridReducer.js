export const generateGrid = state => {
  const gridArray = [];

  if (state.repeatItems) {
    while (gridArray.length < state.gridSize) {
      gridArray.push(Math.round(Math.random() * 1000));
    }
  } else {
    const set = new Set();
    
    while (gridArray.length < state.gridSize) {
      const number = Math.round(Math.random() * 1000);

      if (!set.has(number)) {
        gridArray.push(number);
        set.add(number);
      }
    }
  }

  return {
    ...state,
    grid: gridArray,
    searchingNum: null,
    currentIndex: null,
    valueFound: [],
    isSearching: false
  }
}

export const changeGridSize = (state, { size }) => {
  switch (size) {
    case 10:
      return {
        ...state,
        gridSize: 10
      };
    case 50:
      return {
        ...state,
        gridSize: 50
      };
    case 150:
      return {
        ...state,
        gridSize: 150
      };
    default: return state;
  }
}

export const repeatNumberInGrid = (state, { payload }) => {
  return {
    ...state,
    repeatItems: payload.repeatItems
  }
}

export const searchElement = (state, { value }) => {
  return {
    ...state,
    searchingNum: Number(value),
    isSearching: true
  }
}
