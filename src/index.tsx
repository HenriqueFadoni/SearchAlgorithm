import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

// import { rootReducer } from './store/reducers/reducer';

// const store = createStore(rootReducer);

const app = (
  // <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
