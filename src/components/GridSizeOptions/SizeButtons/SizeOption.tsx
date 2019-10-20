import React from 'react';

interface SizeOptionProps {
  onClickHandler: ((id: number) => void),
  id: number,
  title: string,
  gridSize: number,
  isDisable: boolean
}

const SizeOption: React.FC<SizeOptionProps> = ({ id, title, onClickHandler, gridSize, isDisable }) => (
  <label
    className={`btn btn-secondary ${id === gridSize && 'active'} ${isDisable && 'disabled'}`}
    onClick={() => onClickHandler(id)}
  >
    <input
      type="radio"
      name="options"
      id={id.toString()}
      autoComplete="off"
    /> {title}
  </label>
)

export default SizeOption;
