import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../../../store/actions/index';

const SelfOrganizeBtn: React.FC = () => {
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

export default SelfOrganizeBtn;
