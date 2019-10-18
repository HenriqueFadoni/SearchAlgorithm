import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useDebounce from '../../hooks/useDebounce';
import { searchElement, linearSearch, linearSearchReset } from '../../store/actions/index';

import ResetBtn from './ResetBtn/ResetBtn';

const SearchInput: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const currentIndex = useSelector((state: any) => state.currentIndex);
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
      <div className="search-input">
        <input
          type="text"
          className="form-control"
          id="searchInput"
          placeholder="Search"
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      {grid.length -1 === currentIndex && <ResetBtn searchReset={searchReset} />}
    </div>
  )
}

export default SearchInput;
