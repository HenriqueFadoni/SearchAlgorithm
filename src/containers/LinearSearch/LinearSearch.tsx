import React from 'react';

import Title from '../../components/Title/Title';
import GridSizeOptions from '../../components/GridSizeOptions/GridSizeOptions';
import GridDisplay from '../../components/GridDisplay/GridDisplay';
import Search from '../../components/Search/Search';

const LinearSearch: React.FC = () => (
  <div className="page">
    <Title title='Linear Search'/>
    <GridSizeOptions />
    <GridDisplay />
    <Search />
  </div>
)

export default LinearSearch;
