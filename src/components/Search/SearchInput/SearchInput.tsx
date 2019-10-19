import React from 'react';

interface searchInputProps {
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
  isDisable: boolean
}

const SearchInput: React.FC<searchInputProps> = ({ onChangeHandler, isDisable }) => (
  <div className="search-input">
    <input
      type="text"
      className="form-control"
      id="searchInput"
      placeholder="Search"
      onChange={onChangeHandler}
      disabled={!isDisable}
    />
  </div>
)

export default SearchInput;
