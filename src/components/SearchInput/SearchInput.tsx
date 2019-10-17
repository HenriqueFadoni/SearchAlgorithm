import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import useDebounce from '../../hooks/useDebounce';
import { searchElement, linearSearch } from '../../store/actions/index';

const SearchInput: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
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
    </div>
  )
}

export default SearchInput;
