import React from 'react';

interface ResetBtnProps {
  searchReset: () => void
}

const ResetBtnProps: React.FC<ResetBtnProps> = ({ searchReset }) => (
  <button
    type="button"
    className="btn btn-danger ml-3"
    onClick={searchReset}
  >
    Reset
  </button>
)

export default ResetBtnProps;
