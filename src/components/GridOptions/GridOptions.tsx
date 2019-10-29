import React from 'react';

import SizeOptions from './SizeOptions/SizeOptions';
import RepeatNumBtn from './RepeatNumBtn/RepeatNumBtn';
import SelfOrganizeBtn from './SelfOrganizeBtn/SelfOrganizeBtn';
import SortBtn from './SortBtn/SortBtn';

interface GridOptionsProps {
  isLinearSearch: boolean
}

const GridOptions: React.FC<GridOptionsProps> = ({ isLinearSearch }) => {
  const linearSearchOptions = (
    <>
      <RepeatNumBtn />
      <SelfOrganizeBtn />
    </>
  );

  return (
    <div className="d-flex justify-content-center mt-5">
      <SizeOptions />
      {isLinearSearch && linearSearchOptions}
      <SortBtn isLinearSearch={isLinearSearch}/>
    </div>
  )
}

export default GridOptions;
