import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useDebounce from '../../hooks/useDebounce';
import { searchElement, linearSearch, linearSearchReset } from '../../store/actions/index';

import ResetBtn from './ResetBtn/ResetBtn';
import SearchInput from './SearchInput/SearchInput';

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const currentIndex = useSelector((state: any) => state.currentIndex);
  const isSearching = useSelector((state: any) => state.isSearching);
  const grid = useSelector((state: any) => state.grid);

  const dispatch = useDispatch();
  const debouncedSearchTerm = useDebounce(searchTerm);

  const searchDispatch = () => {
    dispatch(searchElement(debouncedSearchTerm));
    dispatch(linearSearch());
  }

  useEffect(() => {
    if (debouncedSearchTerm) {
      searchDispatch();
    }
  }, [debouncedSearchTerm]);

  const searchReset = () => {
    dispatch(linearSearchReset())
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
