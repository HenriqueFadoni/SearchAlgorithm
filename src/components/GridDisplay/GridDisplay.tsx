import React from 'react';
import { useSelector } from 'react-redux';

const GridDisplay: React.FC = () => {
  const numList = useSelector((state: any) => state.grid)
  let gridDisplay = [];

  if (numList.length > 0) {
    gridDisplay = numList.map((num: Array<number>, i: number) => {
      return <li className="grid__item" key={i}>{num}</li>
    });
  }

  return (
    <ul className="grid__container">
      {gridDisplay}
    </ul>
  )
}

export default GridDisplay;
