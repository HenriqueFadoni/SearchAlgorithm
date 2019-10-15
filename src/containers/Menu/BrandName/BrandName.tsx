import React from 'react';
import { NavLink } from 'react-router-dom';

const BrandName: React.FC = () => (
  <NavLink
    className="navbar-brand"
    to="/linearsearch"
  >
    SearchAlgo
  </NavLink>
)

export default BrandName;
