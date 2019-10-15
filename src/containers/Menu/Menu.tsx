import React from 'react';

import BrandName from './BrandName/BrandName';
import PageLinks from './PageLinks/PageLinks';

const Menu: React.FC = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <BrandName />
    <PageLinks />
  </nav>
);

export default Menu;
