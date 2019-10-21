import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../../store/actions/index';

const SizeOption: React.FC = () => {
  const { isSearching, repeatItems } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  const changeHandler = () => {
    if (!isSearching) {
      dispatch(actions.repeatNumberInGrid(!repeatItems));
      dispatch(actions.generateGrid());
    }
  }

  return (
    <div
      className="btn-group-toggle ml-4"
      data-toggle="buttons"
    >
      <label
        className={`btn btn-secondary ${repeatItems && 'active'}`}
        onClick={changeHandler}
      >
        <input
          type="checkbox"
          disabled={isSearching}
        /> Repeated Numbers
      </label>
    </div>
  )
}

export default SizeOption;
