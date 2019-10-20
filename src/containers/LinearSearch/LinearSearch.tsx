import React from 'react';
import { useSelector } from 'react-redux';

import Title from '../../components/Title/Title';
import GridSizeOptions from '../../components/GridSizeOptions/GridSizeOptions';
import GridDisplay from '../../components/GridDisplay/GridDisplay';
import Search from '../../components/Search/Search';

const LinearSearch: React.FC = () => {
  const gridSize = useSelector((state: any) => state.gridSize);

  return (
    <div className="page">
      <Title title='Linear Search' />
      <GridSizeOptions />
      <GridDisplay />
      {gridSize && <Search searchType='linear' />}
    </div>
  )
}

export default LinearSearch;
