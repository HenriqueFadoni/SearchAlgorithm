import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Hooks and Actions
import useDebounce from '../../hooks/useDebounce';
import * as actions from '../../store/actions/index';

// Components
import ResetBtn from './ResetBtn/ResetBtn';
import SearchInput from './SearchInput/SearchInput';

interface SearchProps {
  searchType: string
}

const Search: React.FC<SearchProps> = ({ searchType }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const grid = useSelector((state: any) => state.grid);
  const currentIndex = useSelector((state: any) => state.currentIndex);
  const isSearching = useSelector((state: any) => state.isSearching);

  const dispatch = useDispatch();
  const debouncedSearchTerm = useDebounce(searchTerm);

  // Debouncing and Search 
  const searchDispatch = () => {
    dispatch(actions.searchElement(debouncedSearchTerm));
    if (searchType === 'linear') dispatch(actions.linearSearch());
  }

  useEffect(() => {
    if (debouncedSearchTerm) {
      searchDispatch();
    }
  }, [debouncedSearchTerm]);

  // Reset Search
  const searchReset = () => {
    if (searchType === 'linear') dispatch(actions.linearSearchReset());
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
        isDisable={grid.length - 1 === currentIndex}
      />
    </div>
  )
}

export default Search;
