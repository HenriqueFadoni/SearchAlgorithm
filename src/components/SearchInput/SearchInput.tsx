import React, { useState, useEffect } from 'react';
import useDebounce from '../../hooks/useDebounce';

const SearchInput: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const searchDispatch = async() => {
    setIsSearching(false);
  }

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
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
      {isSearching && <h3>Searching...</h3>}
    </div>
  )
}

export default SearchInput;
