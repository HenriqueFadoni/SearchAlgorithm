import React from 'react';

interface ResetBtnProps {
  searchReset: () => void,
  isDisable: boolean
}

const ResetBtn: React.FC<ResetBtnProps> = ({ searchReset, isDisable }) => (
  <button
    type="button"
    className="btn btn-danger ml-3"
    onClick={searchReset}
    disabled={!isDisable}
  >
    Reset
  </button>
)

export default ResetBtn;
