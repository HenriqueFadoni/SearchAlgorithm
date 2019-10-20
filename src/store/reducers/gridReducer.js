export const generateGrid = state => {
  const gridArray = [];

  while (gridArray.length < state.gridSize) {
    gridArray.push(Math.round(Math.random() * 1000));
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

export const searchElement = (state, { value }) => {
  return {
    ...state,
    searchingNum: Number(value),
    isSearching: true
  }
}
