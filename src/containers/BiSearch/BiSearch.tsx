import React from 'react';
import { useSelector } from 'react-redux';

import Title from '../../components/Title/Title';
import GridDisplay from '../../components/GridDisplay/GridDisplay';
import GridSizeOptions from '../../components/GridSizeOptions/GridSizeOptions';
import Search from '../../components/Search/Search';

const BiSearch: React.FC = () => {
  const gridSize = useSelector((state: any) => state.gridSize);

  return (
    <div>
      <Title title='Binary Search' />
      <GridSizeOptions isLinearSearch={false} />
      <GridDisplay />
      {gridSize && <Search searchType='binary' />}
    </div>
  )
}

export default BiSearch;
