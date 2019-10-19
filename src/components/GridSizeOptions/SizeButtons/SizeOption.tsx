import React from 'react';

interface SizeOptionProps {
  onClickHandler: ((id: string) => void),
  id: string,
  title: string,
  isDisable: boolean
}

const SizeOption: React.FC<SizeOptionProps> = ({ id, title, onClickHandler, isDisable }) => (
  <label
    className={`btn btn-secondary ${id === '0' && 'active'} ${isDisable && 'disabled'}`}
    onClick={() => onClickHandler(id)}
  >
    <input
      type="radio"
      name="options"
      id={id}
      autoComplete="off"
    /> {title}
  </label>
)

export default SizeOption;
