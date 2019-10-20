import React from 'react';
import { NavLink } from 'react-router-dom';

const BrandName: React.FC = () => (
  <NavLink
    className="navbar-brand"
    to="/"
  >
    SearchAlgo
  </NavLink>
)

export default BrandName;
