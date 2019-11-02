import React from 'react';
import { useSelector } from 'react-redux';

import Title from '../../components/Title/Title';
import GridDisplay from '../../components/GridDisplay/GridDisplay';
import GridOptions from '../../components/GridOptions/GridOptions';
import Search from '../../components/Search/Search';

const LinearSearch: React.FC = () => {
  const gridSize = useSelector((state: any) => state.gridSize);

  return (
    <div className="page">
      <Title title='Linear Search' />
      <GridOptions isLinearSearch={true} />
      <GridDisplay searchType='linear' />
      {gridSize && <Search searchType='linear' />}
    </div>
  )
}

export default LinearSearch;
