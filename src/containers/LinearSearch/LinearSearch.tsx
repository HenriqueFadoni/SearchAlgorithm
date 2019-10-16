import React from 'react';

import Title from '../../components/Title/Title';
import GridSizeBtn from '../../components/GridSizeOptions/GridSizeOptions';
import GridDisplay from '../../components/GridDisplay/GridDisplay';

const LinearSearch: React.FC = () => (
  <div>
    <Title title='Linear Search'/>
    <GridSizeBtn />
    <GridDisplay />
  </div>
)

export default LinearSearch;
