import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../../../store/actions/index';

const SelfOrganizeBtn: React.FC = () => {
  const { isSearching, selfOrganize } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  const changeHandler = () => {
    if (!isSearching) {
      dispatch(actions.selfOrganizeData(!selfOrganize));
    }
  }

  return (
    <div
      className="btn-group-toggle ml-4"
      data-toggle="buttons"
    >
      <label
        className={`btn btn-secondary ${selfOrganize && 'active'}`}
        onClick={changeHandler}
      >
        <input
          type="checkbox"
          disabled={isSearching}
        /> Self-Organize Data
      </label>
    </div>
  )
}

export default SelfOrganizeBtn;
