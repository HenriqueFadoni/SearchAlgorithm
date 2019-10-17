import React from 'react';
import { useSelector } from 'react-redux';

const GridDisplay: React.FC = () => {
  const numbers = useSelector((state: any) => state.grid)
  const searchingNum = useSelector((state: any) => state.searchingNum)
  const currentIndex = useSelector((state: any) => state.currentIndex)
  const valueFound = useSelector((state: any) => state.valueFound)

  return (
    <ul className="grid__container">
      {
        numbers.map((number: number, index: number) => (
          <li
            className={`grid__item ${currentIndex && (index <= currentIndex) && 'grey'} ${valueFound.includes(index) && 'green'}`}
            key={index}
          >
            {number}
          </li>
        ))
      }
    </ul>
  )
}

export default GridDisplay;
