import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Hooks and Actions
import useDebounce from '../../hooks/useDebounce';
import * as actions from '../../store/actions/index';

// Components
import ResetBtn from './ResetBtn/ResetBtn';
import SearchInput from './SearchInput/SearchInput';

// Interfaces
interface SearchProps {
  searchType: string
}

const Search: React.FC<SearchProps> = ({ searchType }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const {
    grid,
    currentIndex,
    currentIndexes,
    isSearching,
    repeatItems,
    valueFound
  } = useSelector((state: any) => state);

  const dispatch = useDispatch();
  const debouncedSearchTerm = useDebounce(searchTerm);

  const isSearchFinished = (grid.length - 1 === currentIndex) || (grid.length === currentIndexes.length);
  const isRepeating = (isSearchFinished && repeatItems);
  const isUnique = ((valueFound.length > 0 || isSearchFinished) && !repeatItems);

  // Debounce and Search
  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(actions.searchElement(debouncedSearchTerm));
      if (searchType === 'linear') dispatch(actions.linearSearch());
      if (searchType === 'binary') dispatch(actions.binarySearch());
    }
  }, [dispatch, searchType, debouncedSearchTerm]);

  // Reset Search
  const searchReset = () => {
    if (searchType === 'linear') dispatch(actions.linearSearchReset());
    if (searchType === 'binary') dispatch(actions.binarySearchReset());
    setSearchTerm('');
  }

  return (
    <div className="d-flex justify-content-center">
      <SearchInput
        searchTerm={searchTerm}
        onChangeHandler={e => setSearchTerm(e.target.value)}
        isDisable={isSearching}
      />
      <ResetBtn
        searchReset={searchReset}
        isDisable={isRepeating || isUnique}
      />
    </div>
  )
}

export default Search;
// Number not found => RESET BTN NOT DISABLED - BUG