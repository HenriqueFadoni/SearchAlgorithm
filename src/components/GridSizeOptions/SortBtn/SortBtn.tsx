import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as actions from '../../../store/actions/index';

const RepeatNumBtn: React.FC = () => {
  const { isSearching, sortGrid } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  const changeHandler = () => {
    if (!isSearching) {
      dispatch(actions.sortGrid(!sortGrid));
    }
  }

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
          disabled={isSearching}
        /> Sort Grid
      </label>
    </div>
  )
}

export default RepeatNumBtn;