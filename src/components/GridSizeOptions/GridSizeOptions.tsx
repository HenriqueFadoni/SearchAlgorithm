import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/index'

import SizeOption from './SizeButtons/SizeOption';

const GridSize: React.FC = () => {
  const dispatch = useDispatch();
  const isSearching = useSelector((state: any) => state.isSearching);

  const options = [
    'Small Grid',
    'Medium Grid',
    'Large Grid'
  ]

  const onClickHandler = (id: string) => {
    if (!isSearching) {
      dispatch(actions.changeGridSize(id));
      dispatch(actions.generateGrid())
    }
  }

  const optionList = options.map((option, index) => (
    <SizeOption
      key={index}
      id={index.toString()}
      title={option}
      onClickHandler={onClickHandler}
      isDisable={isSearching}
    />
  ))

  return (
    <div className="d-flex justify-content-center mt-5">
      <div
        className="btn-group btn-group-toggle"
        data-toggle="buttons"
      >
        {optionList}
      </div>
    </div>
  )
}

export default GridSize;
