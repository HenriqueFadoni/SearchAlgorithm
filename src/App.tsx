import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import Index from './containers/Index/Index';
import LinearSearch from './containers/LinearSearch/LinearSearch';
import BiSearch from './containers/BiSearch/BiSearch';
import Menu from './containers/Menu/Menu';

const App: React.FC = () => (
  <div className="App">
    <Menu />
    <Switch>
      <Route path="/" component={Index} exact/>
      <Route path="/linearsearch" component={LinearSearch} />
      <Route path="/binarysearch" component={BiSearch} />
    </Switch>
  </div>
);

export default App;
