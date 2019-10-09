import React from 'react';
import {
	Route,
	Switch
} from 'react-router-dom';

import BiSearch from './components/LinearSearch/LinearSearch';
import LinearSearch from './components/LinearSearch/LinearSearch';

const App: React.FC = () => (
  <div className="App">
    <Switch>
      <Route path="/" component={LinearSearch} exact />
      <Route path="/binary-search" component={BiSearch} />
    </Switch>
  </div>
);

export default App;
