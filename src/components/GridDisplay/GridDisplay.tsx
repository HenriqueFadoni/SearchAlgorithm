import React from 'react';
import { useSelector } from 'react-redux';

const GridDisplay: React.FC = () => {
  const numbers = useSelector((state: any) => state.grid)
  const currentIndex = useSelector((state: any) => state.currentIndex)
  const valueFound = useSelector((state: any) => state.valueFound)

  const listItems = numbers.map((number: number, index: number) => {
    const greyColor = currentIndex && (index <= currentIndex) && 'grey';
    const greenColor = valueFound.includes(index) && 'green';

    return (
      <li
        className={`grid__item ${greyColor} ${greenColor}`}
        key={index}
      >
        {number}
      </li>
    )
  })

  return (
    <ul className="grid__container">
      {listItems}
    </ul>
  )
}

export default GridDisplay;
