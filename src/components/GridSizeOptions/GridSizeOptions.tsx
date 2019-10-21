import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/index'

import SizeOption from './SizeButtons/SizeOption';
import RepeatNumBtn from '../../components/RepeatNumBtn/RepeatNumBtn';

const GridSize: React.FC = () => {
  const dispatch = useDispatch();
  const gridSize = useSelector((state: any) => state.gridSize);
  const isSearching = useSelector((state: any) => state.isSearching);

  const options = [
    { title: 'Small Grid', size: 10 },
    { title: 'Medium Grid', size: 50 },
    { title: 'Large Grid', size: 150 }
  ]

  const onClickHandler = (id: number) => {
    if (!isSearching) {
      dispatch(actions.changeGridSize(id));
      dispatch(actions.generateGrid())
    }
  }

  const optionList = options.map(({ title, size }, index) => (
    <SizeOption
      key={index}
      id={size}
      title={title}
      onClickHandler={onClickHandler}
      gridSize={gridSize}
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
      <RepeatNumBtn />
    </div>
  )
}

export default GridSize;
