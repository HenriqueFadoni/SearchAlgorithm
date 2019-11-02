import * as actionTypes from './actionTypes';

const valueFound = indexFound => {
  return {
    type: actionTypes.BINARY_SEARCH_VALUE_FOUND,
    payload: {
      indexFound
    }
  }
}

const currentValue = currentIndexes => {
  return {
    type: actionTypes.BINARY_SEARCH_CURRENT_VALUE,
    payload: {
      currentIndexes
    }
  }
}

const findValue = (dispatch, index, guess, searchingNum, mid, unvalidIndexes) => {
  setTimeout(() => {
    dispatch(currentValue(unvalidIndexes));
    if (guess === searchingNum) {
      dispatch(valueFound(mid))
    }
  }, 250 * index)
}

export const binarySearch = () => {
  return (dispatch, getState) => {
    const { grid, searchingNum } = getState();
    let lowerValue = 0;
    let higherValue = grid.length - 1;

    for (let i = 0; lowerValue <= higherValue; i++) {
      const middleIndex = Math.floor((lowerValue + higherValue) / 2);
      const middleValue = grid[middleIndex];
      const unvalidIndexes = [];

      if (searchingNum < middleValue) {
        higherValue = middleIndex - 1; // meio - fim
        unvalidIndexes.push(higherValue);

        grid.forEach((_, index) => {
          if (index > higherValue) {
            unvalidIndexes.push(index)
          }
        });
      } else {
        lowerValue = middleIndex + 1; // meio - inicio
        unvalidIndexes.push(lowerValue);

        grid.forEach((_, index) => {
          if (index < lowerValue) {
            unvalidIndexes.push(index)
          }
        });
      }

      findValue(dispatch, i, middleValue, searchingNum, middleIndex, unvalidIndexes);
    }
  }
}