import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as actions from '../../../store/actions/index';

interface RepeatNumProps {
  isLinearSearch: boolean
}

const RepeatNumBtn: React.FC<RepeatNumProps> = ({ isLinearSearch }) => {
  const { isSearching, sortGrid } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  const changeHandler = () => {
    if (isLinearSearch && !isSearching) {
      dispatch(actions.sortGrid(!sortGrid));
    }
  }

  useEffect(() => {
    if (!isSearching && !isLinearSearch) {
      dispatch(actions.sortGrid(true));
    }
  }, [dispatch, isLinearSearch, isSearching])

  return (
    <div
      className="btn-group-toggle ml-4"
      data-toggle="buttons"
    >
      <label
        className={`btn btn-secondary ${sortGrid && 'active'}`}
        onClick={changeHandler}
      >
        <input
          type="checkbox"
          disabled={isSearching || !isLinearSearch}
        />
        Sort Grid
      </label>
    </div>
  )
}

export default RepeatNumBtn;