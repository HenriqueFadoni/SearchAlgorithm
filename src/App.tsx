import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import LinearSearch from './components/LinearSearch/LinearSearch';
import BiSearch from './components/BiSearch/BiSearch';
import Menu from './components/Menu/Menu';

const App: React.FC = () => (
  <div className="App">
    <Menu />
    <Switch>
      <Route path="/linearsearch" component={LinearSearch} />
      <Route path="/binarysearch" component={BiSearch} />
    </Switch>
  </div>
);

export default App;
