import React from 'react';

interface searchInputProps {
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<searchInputProps> = ({ onChangeHandler }) => (
  <div className="search-input">
    <input
      type="text"
      className="form-control"
      id="searchInput"
      placeholder="Search"
      onChange={onChangeHandler}
    />
  </div>
)

export default SearchInput;
