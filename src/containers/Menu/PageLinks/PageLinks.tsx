import React from 'react';
import { NavLink } from 'react-router-dom';

const PageLinks: React.FC = () => (
  <div
    className="collapse navbar-collapse"
    id="navbarNavAltMarkup"
  >
    <div className="navbar-nav">
      <NavLink
        className="nav-item nav-link"
        to="/linearsearch"
      >
        Linear Search
      </NavLink>
      <NavLink
        className="nav-item nav-link"
        to="/binarysearch"
      >
        Binary Search
      </NavLink>
    </div>
  </div>
);

export default PageLinks;

// Block Routes when Searching for an Element
