import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

interface GridDisplayProps {
  searchType: string
}

const GridDisplay: React.FC<GridDisplayProps> = ({ searchType }) => {
  const [listItems, setListItems] = useState([]);

  const numbers = useSelector((state: any) => state.grid)
  const currentIndex = useSelector((state: any) => state.currentIndex)
  const currentIndexes = useSelector((state: any) => state.currentIndexes)
  const valueFound = useSelector((state: any) => state.valueFound)
  const sortGrid = useSelector((state: any) => state.sortGrid)

  useEffect(() => {
    const newList = numbers.map((number: number, index: number) => {
      let greyColor;

      if (currentIndex && searchType === 'linear') {
        greyColor = index <= currentIndex && 'grey';
      }
      
      if (currentIndexes && searchType === 'binary') {
        greyColor = currentIndexes.includes(index) && 'grey';
      }

      const greenColor = valueFound.includes(index) && 'green';

      return (
        <li
          className={`grid__item ${greyColor} ${greenColor}`}
          key={index}
        >
          {number}
        </li>
      )
    });

    setListItems(newList)
  }, [numbers, sortGrid, currentIndex, currentIndexes, valueFound, searchType]);

  return (
    <ul className="grid__container">
      {listItems}
    </ul>
  )
}

export default GridDisplay;
