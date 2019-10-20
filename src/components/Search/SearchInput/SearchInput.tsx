import React from 'react';

interface searchInputProps {
  searchTerm: string,
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
  isDisable: boolean
}

const SearchInput: React.FC<searchInputProps> = ({ searchTerm, onChangeHandler, isDisable }) => (
  <div className="search-input">
    <input
      type="text"
      className="form-control"
      id="searchInput"
      value={searchTerm}
      placeholder="Search"
      onChange={onChangeHandler}
      disabled={isDisable}
    />
  </div>
)

export default SearchInput;
