import React from 'react';
import { useSelector } from 'react-redux';

const GridDisplay: React.FC = () => {
  const numList = useSelector((state: any) => state.grid)
  let gridDisplay = [];

  if (numList.length > 0) {
    gridDisplay = numList.map((row: Array<number>, i: number) => {
      const x = row.map((num, index) => (
        <li
          className="col"
          key={index}
        >
          {num}
        </li>

      ))

      return (
        <ul
          className="row"
          key={i}
        >
          {x}
        </ul>
      )
    });
  }

  return (
    <div className="container">
      {gridDisplay}
    </div>
  )
}

export default GridDisplay;
